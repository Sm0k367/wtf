// components/CinematicVideo.js

export default function CinematicVideo() {
  return (
    <div style={styles.videoWrap}>
      <video
        src="/cinematic-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={styles.video}
        poster="/cinematic-poster.jpg"
      />
      <div style={styles.overlayGlow} />
    </div>
  );
}

const styles = {
  videoWrap: {
    position: 'relative',
    borderRadius: '1.5rem',
    overflow: 'hidden',
    width: '100%',
    maxWidth: '640px',
    margin: '0 auto',
    boxShadow: '0 0 64px #0ff3, 0 0 12px #232446aa',
    marginBottom: '2.5rem',
    minHeight: '320px'
  },
  video: {
    width: '100%',
    height: '320px',
    objectFit: 'cover',
    borderRadius: '1.5rem',
    filter: 'brightness(0.60) saturate(1.21) grayscale(10%)',
    zIndex: 1,
    display: 'block'
  },
  overlayGlow: {
    position: 'absolute',
    left: 0, right: 0, top: 0, bottom: 0,
    pointerEvents: 'none',
    boxShadow: '0 0 96px #0ff7 inset, 0 0 16px #232446da inset',
    zIndex: 2,
    borderRadius: '1.5rem',
  }
};
