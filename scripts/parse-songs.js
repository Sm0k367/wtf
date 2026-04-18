import { readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Read the SQL file
const sqlContent = readFileSync(join(__dirname, 'songs-data.sql'), 'utf-8');

const lines = sqlContent.split('\n');

// Parse iframe embeds to get Suno IDs
const sunoIdMap = new Map();
const iframeRegex = /embed\/([a-f0-9-]+)/g;

// First two songs have known IDs from the iframes
// Line 1: Let Me See You Go to Work = ef5e6b4c-fd00-4070-ab4f-5a95f8ec5315
// Line 2: Low Lights, High Danger = 4eb5722c-08a3-48ac-81e1-8e506a2405ab

const tracks = [];
let id = 1;
let i = 0;

// Skip the first 7 lines (iframes and instructions)
while (i < lines.length && !lines[i].startsWith('Image for')) {
  i++;
}

// Parse songs - each song has this pattern:
// Image for {title}
// (empty or content)
// {duration}
// v5
// {title}
// {genre}
// {plays}
// {likes}
// {comments}

while (i < lines.length) {
  const line = lines[i].trim();
  
  if (line.startsWith('Image for ')) {
    const title = line.replace('Image for ', '').trim();
    
    // Look ahead for the data
    let duration = '';
    let genre = '';
    let plays = 0;
    let likes = 0;
    
    // Scan next lines for data
    for (let j = i + 1; j < Math.min(i + 12, lines.length); j++) {
      const dataLine = lines[j].trim();
      
      // Duration pattern (e.g., "3:42" or "7:07")
      if (/^\d+:\d{2}$/.test(dataLine)) {
        duration = dataLine;
      }
      // Skip "v5" version marker
      else if (dataLine === 'v5') {
        continue;
      }
      // Genre line (contains comma or common genre keywords)
      else if (dataLine.includes(',') || 
               dataLine.toLowerCase().includes('house') ||
               dataLine.toLowerCase().includes('hip') ||
               dataLine.toLowerCase().includes('edm') ||
               dataLine.toLowerCase().includes('funk') ||
               dataLine.toLowerCase().includes('trap') ||
               dataLine.toLowerCase().includes('techno') ||
               dataLine.toLowerCase().includes('electro')) {
        if (!genre && dataLine !== title) {
          genre = dataLine;
        }
      }
      // Numbers for plays/likes
      else if (/^\d+$/.test(dataLine)) {
        const num = parseInt(dataLine, 10);
        if (!plays && num >= 0) {
          plays = num;
        } else if (!likes && num >= 0) {
          likes = num;
          break; // Found both plays and likes
        }
      }
    }
    
    // Determine Suno ID for known songs
    let sunoId = null;
    if (title === 'Let Me See You Go to Work') {
      sunoId = 'ef5e6b4c-fd00-4070-ab4f-5a95f8ec5315';
    } else if (title === 'Low Lights, High Danger') {
      sunoId = '4eb5722c-08a3-48ac-81e1-8e506a2405ab';
    }
    
    if (title && duration) {
      tracks.push({
        id,
        title,
        duration: duration || '3:30',
        genre: genre || 'Electronic',
        plays: plays || 0,
        likes: likes || 0,
        sunoId
      });
      id++;
    }
  }
  
  i++;
}

console.log(`Parsed ${tracks.length} tracks`);

// Generate TypeScript file
const tsContent = `export interface Track {
  id: number
  title: string
  duration: string
  genre: string
  plays: number
  likes: number
  sunoId: string | null
}

export const tracks: Track[] = ${JSON.stringify(tracks, null, 2)}
`;

writeFileSync(join(__dirname, '..', 'lib/tracks.ts'), tsContent);
console.log('Written to lib/tracks.ts');
