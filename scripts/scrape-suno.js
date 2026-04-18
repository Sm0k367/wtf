import fs from 'fs';
import path from 'path';

// Suno API endpoint for user songs
const SUNO_API_BASE = 'https://studio-api.prod.suno.com';
const USER_HANDLE = 'dj_smoke_stream';

async function fetchUserProfile() {
  const response = await fetch(`${SUNO_API_BASE}/api/search/profile/?query=${USER_HANDLE}`);
  if (!response.ok) throw new Error(`Failed to fetch profile: ${response.status}`);
  return response.json();
}

async function fetchUserSongs(userId, page = 0) {
  const response = await fetch(`${SUNO_API_BASE}/api/profiles/${userId}/songs?page=${page}`);
  if (!response.ok) throw new Error(`Failed to fetch songs: ${response.status}`);
  return response.json();
}

async function fetchAllSongs() {
  console.log('Fetching DJ Smoke Stream profile...');
  
  // Try the public clips endpoint
  let allSongs = [];
  let page = 0;
  let hasMore = true;
  
  // Use the public web API
  while (hasMore && page < 50) { // Max 50 pages as safety
    try {
      const response = await fetch(`https://suno.com/api/profiles/dj_smoke_stream/songs?page=${page}`, {
        headers: {
          'Accept': 'application/json',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      });
      
      if (!response.ok) {
        console.log(`Page ${page} failed with status ${response.status}`);
        break;
      }
      
      const data = await response.json();
      console.log(`Page ${page}: Found ${data.songs?.length || 0} songs`);
      
      if (data.songs && data.songs.length > 0) {
        allSongs = allSongs.concat(data.songs);
        page++;
      } else {
        hasMore = false;
      }
    } catch (error) {
      console.log(`Error on page ${page}:`, error.message);
      break;
    }
  }
  
  return allSongs;
}

async function main() {
  try {
    const songs = await fetchAllSongs();
    console.log(`Total songs fetched: ${songs.length}`);
    
    if (songs.length === 0) {
      console.log('No songs found via API. Using alternative approach...');
      // Write a placeholder file indicating we need to use the SQL data
      fs.writeFileSync(
        path.join(process.cwd(), 'lib', 'suno-songs.json'),
        JSON.stringify({ error: 'API not accessible', songs: [] }, null, 2)
      );
      return;
    }
    
    // Map songs to our track format
    const tracks = songs.map((song, index) => ({
      id: index + 1,
      title: song.title || 'Untitled',
      sunoId: song.id,
      duration: formatDuration(song.duration || 0),
      genre: song.tags || song.metadata?.tags || 'Electronic',
      plays: song.play_count || 0,
      likes: song.upvote_count || 0,
      comments: song.comment_count || 0,
      imageUrl: song.image_url || song.image_large_url || null,
      audioUrl: song.audio_url || null,
      createdAt: song.created_at || null
    }));
    
    // Generate TypeScript file
    const tsContent = `export interface Track {
  id: number
  title: string
  sunoId: string
  duration: string
  genre: string
  plays: number
  likes: number
  comments: number
  imageUrl?: string | null
  audioUrl?: string | null
  createdAt?: string | null
}

export const tracks: Track[] = ${JSON.stringify(tracks, null, 2)};
`;
    
    fs.writeFileSync(path.join(process.cwd(), 'lib', 'tracks.ts'), tsContent);
    console.log(`Successfully wrote ${tracks.length} tracks to lib/tracks.ts`);
    
    // Also save raw JSON for reference
    fs.writeFileSync(
      path.join(process.cwd(), 'lib', 'suno-songs.json'),
      JSON.stringify(songs, null, 2)
    );
    
  } catch (error) {
    console.error('Error:', error.message);
  }
}

function formatDuration(seconds) {
  if (!seconds) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

main();
