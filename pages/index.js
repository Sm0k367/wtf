// pages/index.js
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>EPIC TECH AI – Cinematic Homepage</title>
        <meta name="description" content="Ultra-realistic, cinematic AI-powered homepage for innovation and tech rebels" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={styles.main}>
        <section style={styles.heroBox}>
          <h1 style={styles.title}>🔥 Welcome to <span style={{color:'#0ff'}}>EPIC TECH AI</span> 🔥</h1>
          <h2 style={styles.subtitle}>
            a hub for innovation & technological advancement
          </h2>
          <div style={styles.cinematicBg}>
            {/* This is where the cinematic video or hero animation goes */}
            <video
              src="/cinematic-bg.mp4"
              autoPlay
              loop
              muted
              playsInline
              style={styles.bgVideo}
              poster="/cinematic-poster.jpg"
            />
          </div>
          <p style={styles.cta}>
            <strong>Charismatic AI Host coming soon.</strong> Interactive elements, forums, & merch—loading up next!
          </p>
        </section>
      </main>
      <style jsx global>{`
        body {
          margin: 0;
          background: linear-gradient(135deg, #111 0%, #232446 60%, #090A2E 100%);
          color: #fcfcfc;
          font-family: 'Inter', 'Arial', sans-serif;
          min-height: 100vh;
        }
      `}</style>
    </>
  );
}

const styles = {
  main: {
    display: 'flex',
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'none',
  },
  heroBox: {
    padding: '2rem 3rem',
    borderRadius: '2rem',
    background: 'rgba(10,10,30,0.75)',
    boxShadow: '0 8px 32px rgba(0,0,0,0.22)',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    zIndex: 1,
  },
  title: {
    fontSize: '2.75rem',
    marginBottom: '0.5rem',
    letterSpacing: '0.03em',
    fontWeight: 900,
    textShadow: '0 2px 24px #0ff, 0 0 16px #232446',
  },
  subtitle: {
    fontSize: '1.25rem',
    color: '#0ff',
    fontWeight: 500,
    marginBottom: '2rem',
    textShadow: '0 0 4px #111, 0 0 4px #0ff3',
  },
  cta: {
    marginTop: '2.2rem',
    color: '#fff',
    background: 'linear-gradient(90deg,#0ff3,#2438FF44)',
    padding: '0.75rem 2rem',
    borderRadius: '3rem',
    fontSize: '1.15rem',
    fontWeight: 600,
    letterSpacing: '.01em',
    boxShadow: '0 2px 16px #0ff2',
    display: 'inline-block'
  },
  cinematicBg: {
    position: 'relative',
    width: '100%',
    minHeight: '320px',
    marginBottom: '2rem',
    borderRadius: '1.5rem',
    overflow: 'hidden',
    boxShadow: '0 0 64px #0ff3'
  },
  bgVideo: {
    width: '100%',
    height: '320px',
    objectFit: 'cover',
    filter: 'brightness(0.55) saturate(1.2) blur(0px) grayscale(15%)',
    borderRadius: '1.5rem',
  },
};
