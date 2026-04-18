// pages/about.js
import Head from 'next/head';
import NeonDivider from '../components/NeonDivider';
import TeamSpotlight from '../components/TeamSpotlight';

export default function About() {
  return (
    <>
      <Head>
        <title>About – EPIC TECH AI</title>
        <meta name="description" content="About this cinematic, AI-powered, community-driven, face-melting homepage project." />
      </Head>
      <main style={styles.main}>
        <h1 style={styles.title}>About EPIC TECH AI</h1>
        <p style={styles.bigText}>
          EPIC TECH AI is the playground, portfolio, and collision space for everyone who wants
          to build wild, cinematic, AI-driven tech.
        </p>
        <NeonDivider width={440} />
        <ul style={styles.list}>
          <li>
            <strong>🚀 Cinematic Home:</strong> Sci-fi look. 8K video. Interactive neon.
          </li>
          <li>
            <strong>🤖 Charismatic AI Host:</strong> Not just a bot—a vibe, a face, and a brain.
          </li>
          <li>
            <strong>💬 Community:</strong> Code, create, collab, and meme together.
          </li>
          <li>
            <strong>🛒 Merch:</strong> Limited drops for those who build or show up big.
          </li>
        </ul>
        <NeonDivider width={340} color="#36f9ff" />
        <TeamSpotlight />
      </main>
    </>
  );
}

const styles = {
  main: {
    maxWidth: '820px',
    margin: '0 auto',
    padding: '3rem 2rem 4rem 2rem',
    background: 'rgba(21,24,44,0.95)',
    borderRadius: '1.8rem',
    marginTop: '3.5rem',
    boxShadow: '0 0 48px #0ff2, 0 0 8px #232446aa'
  },
  title: {
    fontSize: '2.22rem',
    textAlign: 'center',
    marginBottom: '1.1rem',
    fontWeight: 800,
    color: '#0ff',
    textShadow: '0 0 16px #0ff9, 0 0 12px #232446aa'
  },
  bigText: {
    fontSize: '1.26rem',
    textAlign: 'center',
    color: '#fff',
    marginBottom: '2rem',
    marginTop: '0.7rem'
  },
  list: {
    color: '#aad6ff',
    fontSize: '1.09rem',
    marginBottom: '2.5rem',
    marginTop: '1.2rem'
  }
};
