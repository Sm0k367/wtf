import fs from 'fs';

async function fetchSunoProfile() {
  console.log('Fetching DJ Smoke Stream Suno profile HTML...');
  
  try {
    const response = await fetch('https://suno.com/@dj_smoke_stream', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
      }
    });
    
    console.log('Response status:', response.status);
    
    if (!response.ok) {
      console.error('Failed to fetch:', response.statusText);
      return;
    }
    
    const html = await response.text();
    console.log('HTML length:', html.length);
    
    // Save raw HTML
    fs.writeFileSync('/vercel/share/v0-project/scripts/suno-profile.html', html);
    console.log('Saved HTML file');
    
    // Look for __NEXT_DATA__ JSON
    const nextDataMatch = html.match(/<script id="__NEXT_DATA__"[^>]*>([\s\S]*?)<\/script>/);
    if (nextDataMatch) {
      console.log('Found __NEXT_DATA__');
      try {
        const jsonData = JSON.parse(nextDataMatch[1]);
        fs.writeFileSync('/vercel/share/v0-project/scripts/suno-nextdata.json', JSON.stringify(jsonData, null, 2));
        console.log('Saved __NEXT_DATA__ JSON');
        
        // Try to find songs in the data
        const songs = findSongsInObject(jsonData, []);
        if (songs.length > 0) {
          console.log('Found', songs.length, 'songs in __NEXT_DATA__');
          fs.writeFileSync('/vercel/share/v0-project/scripts/suno-songs.json', JSON.stringify(songs, null, 2));
        }
      } catch (e) {
        console.error('Error parsing __NEXT_DATA__:', e.message);
      }
    }
    
    // Look for all UUIDs
    const uuidPattern = /[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}/g;
    const matches = html.match(uuidPattern);
    
    if (matches) {
      const uniqueIds = [...new Set(matches)];
      console.log('Found', uniqueIds.length, 'unique UUIDs in HTML');
      fs.writeFileSync('/vercel/share/v0-project/scripts/suno-uuids.json', JSON.stringify(uniqueIds, null, 2));
    }
    
  } catch (error) {
    console.error('Error:', error.message);
  }
}

function findSongsInObject(obj, songs) {
  if (!obj || typeof obj !== 'object') return songs;
  
  if (Array.isArray(obj)) {
    for (const item of obj) {
      findSongsInObject(item, songs);
    }
  } else {
    // Check if this looks like a song object
    if (obj.id && obj.title && (obj.audio_url || obj.play_count !== undefined)) {
      songs.push({
        id: obj.id,
        title: obj.title,
        audio_url: obj.audio_url,
        image_url: obj.image_url || obj.image_large_url,
        play_count: obj.play_count,
        upvote_count: obj.upvote_count,
        tags: obj.tags || obj.metadata?.tags,
        duration: obj.metadata?.duration
      });
    }
    
    for (const key of Object.keys(obj)) {
      findSongsInObject(obj[key], songs);
    }
  }
  
  return songs;
}

fetchSunoProfile();
