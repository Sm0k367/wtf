// components/GlitchFX.js
import { useState, useEffect } from 'react';

export default function GlitchFX({ children }) {
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    let timeout;
    const randomGlitch = () => {
      setGlitch(true);
      timeout = setTimeout(() => setGlitch(false), 60 + Math.random() * 150);
    };
    const timer = setInterval(randomGlitch, 1300 + Math.random() * 1500);
    return () => {
      clearTimeout(timeout);
      clearInterval(timer);
    };
  }, []);

  return (
    <span style={glitch ? styles.glitch : styles.normal}>
      {children}
      {glitch && <span style={styles.overlay}>{children}</span>}
    </span>
  );
}

const styles = {
  normal: {
    position: 'relative',
    display: 'inline-block',
  },
  glitch: {
    position: 'relative',
    display: 'inline-block',
    color: '#0ff',
    textShadow: `
      1px 0 6px #0ff8,
      -1px 2px 10px #ff00cc90,
      2px -2px 12px #00fff4b0`
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    color: '#ff0',
    opacity: 0.41,
    pointerEvents: 'none',
    mixBlendMode: 'difference'
  }
};
