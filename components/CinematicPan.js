// components/CinematicPan.js
import { useRef, useEffect } from 'react';

export default function CinematicPan({ children }) {
  const panRef = useRef();

  useEffect(() => {
    const el = panRef.current;
    if (!el) return;
    const handle = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 46; // pan limit
      const y = (e.clientY / window.innerHeight - 0.5) * 22;
      el.style.transform = `perspective(1200px) rotateY(${x}deg) rotateX(${-y}deg) scale(1.015)`;
    };
    document.addEventListener('mousemove', handle);
    return () => document.removeEventListener('mousemove', handle);
  }, []);

  return (
    <div ref={panRef} style={styles.root}>
      {children}
    </div>
  );
}

const styles = {
  root: {
    transition: 'transform .19s cubic-bezier(.36,.48,.48,.93)',
    willChange: 'transform',
  }
};
