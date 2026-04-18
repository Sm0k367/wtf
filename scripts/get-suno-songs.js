import { writeFileSync } from 'fs';

const run = async () => {
  console.log('Starting fetch...');

  const response = await fetch('https://suno.com/@dj_smoke_stream', {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    }
  });

  console.log('Status:', response.status);
  const html = await response.text();
  console.log('HTML length:', html.length);

  // Save HTML
  writeFileSync('/vercel/share/v0-project/scripts/suno-html.txt', html);
  console.log('Saved HTML');

  // Extract __NEXT_DATA__
  const nextDataMatch = html.match(/<script id="__NEXT_DATA__"[^>]*>([\s\S]*?)<\/script>/);
  if (nextDataMatch) {
    console.log('Found __NEXT_DATA__');
    writeFileSync('/vercel/share/v0-project/scripts/nextdata.json', nextDataMatch[1]);
    
    try {
      const data = JSON.parse(nextDataMatch[1]);
      
      // Find songs recursively
      function findSongs(obj, results = []) {
        if (!obj || typeof obj !== 'object') return results;
        if (Array.isArray(obj)) {
          obj.forEach(item => findSongs(item, results));
        } else {
          if (obj.id && obj.title && (obj.audio_url || obj.play_count !== undefined)) {
            results.push({
              id: obj.id,
              title: obj.title,
              audio_url: obj.audio_url,
              image_url: obj.image_url || obj.image_large_url,
              play_count: obj.play_count,
              upvote_count: obj.upvote_count,
              tags: obj.tags,
              duration: obj.metadata?.duration
            });
          }
          Object.values(obj).forEach(val => findSongs(val, results));
        }
        return results;
      }
      
      const songs = findSongs(data);
      console.log('Found songs:', songs.length);
      
      if (songs.length > 0) {
        writeFileSync('/vercel/share/v0-project/scripts/songs.json', JSON.stringify(songs, null, 2));
        console.log('First song:', songs[0].title, songs[0].id);
      }
    } catch (e) {
      console.error('Parse error:', e.message);
    }
  } else {
    console.log('No __NEXT_DATA__ found');
  }

  // Extract UUIDs
  const uuids = html.match(/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}/g);
  if (uuids) {
    const unique = [...new Set(uuids)];
    console.log('Unique UUIDs:', unique.length);
    writeFileSync('/vercel/share/v0-project/scripts/uuids.json', JSON.stringify(unique, null, 2));
  }

  console.log('Done');
};

run();
