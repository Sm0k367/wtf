// components/ParallaxBg.js
import { useRef, useEffect } from 'react';

export default function ParallaxBg({ layers = [], height = 400 }) {
  const containerRef = useRef();

  useEffect(() => {
    const handle = (e) => {
      const percentX = e.clientX / window.innerWidth;
      const percentY = e.clientY / window.innerHeight;
      Array.from(containerRef.current.children).forEach((layer, idx) => {
        const depth = (idx + 1) / layers.length;
        layer.style.transform = `translate3d(${(percentX - 0.5) * depth * 40}px, ${(percentY - 0.5) * depth * 20}px, 0)`;
      });
    };
    window.addEventListener('mousemove', handle);
    return () => window.removeEventListener('mousemove', handle);
  }, [layers.length]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        height,
        overflow: 'hidden',
        zIndex: 0,
      }}
    >
      {layers.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`parallax-layer-${i}`}
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.82 - i * 0.12,
            filter: 'blur(0.4px) brightness(0.92)',
            pointerEvents: 'none'
          }}
        />
      ))}
    </div>
  );
}
