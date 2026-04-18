// components/SoundFX.js

export function playSound(src, options = {}) {
  const audio = new Audio(src);
  if (options.volume !== undefined) audio.volume = options.volume;
  if (options.loop) audio.loop = true;
  audio.play();
}

// Example React hook that fires on some event:
import { useRef } from 'react';

export function useSoundFX(src, config = {}) {
  const audioRef = useRef();
  return () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(src);
      if (config.volume !== undefined) audioRef.current.volume = config.volume;
      if (config.loop) audioRef.current.loop = true;
    }
    audioRef.current.currentTime = 0;
    audioRef.current.play();
  };
}
