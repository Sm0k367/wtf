// components/AiHost.js
import { useState } from 'react';

export default function AiHost() {
  const [message, setMessage] = useState('Ready to make your visit epic.');

  return (
    <div style={styles.hostWrap}>
      <div style={styles.avatarGlow}>
        <img
          src="/ai-host-avatar.png"
          alt="Charismatic AI Host"
          style={styles.avatar}
          className="ai-glow"
        />
      </div>
      <h3 style={styles.name}>Astra – EPIC TECH AI</h3>
      <div style={styles.speechBubble}>{message}</div>
    </div>
  );
}

const styles = {
  hostWrap: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '2rem',
    marginBottom: '2.5rem',
  },
  avatarGlow: {
    borderRadius: '50%',
    padding: '0.35rem',
    background: 'linear-gradient(90deg,#0ff8,#232446cc,#09f9)',
    boxShadow: '0 0 48px #0ff7, 0 0 0.5rem #09f9',
    marginBottom: '1rem',
  },
  avatar: {
    height: '104px',
    width: '104px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '4px solid #0ff8',
    filter: 'grayscale(2%) contrast(1.18)',
    background: '#161829',
  },
  name: {
    fontSize: '1.45rem',
    fontWeight: 700,
    color: '#0ff',
    letterSpacing: '0.04em',
    margin: 0,
    marginBottom: '0.7rem',
    textShadow: '0 0 10px #0ff3, 0 2px 18px #23244688',
  },
  speechBubble: {
    minHeight: '2.6em',
    background: 'rgba(20,22,40,0.90)',
    border: '2px solid #0ff4',
    borderRadius: '2em',
    color: '#fff',
    fontSize: '1.08rem',
    padding: '0.7em 2em',
    boxShadow: '0 0 16px #0ff3',
    marginTop: 0,
    textAlign: 'center',
    maxWidth: '320px',
    transition: 'all 0.18s',
  }
};
