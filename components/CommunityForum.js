// components/CommunityForum.js

export default function CommunityForum() {
  // Later: fetch threads/posts from API or a Groq-powered AI backend!
  return (
    <section style={styles.forumSection}>
      <h2 style={styles.heading}>💬 Community Forum</h2>
      <div style={styles.card}>
        <h3 style={styles.topic}>🚀 Launch Party: Show Off Your Builds!</h3>
        <p style={styles.snippet}>
          Drop your wildest creations, hacks, or AI experiments. Get instant feedback and props from the crew!
        </p>
        <button style={styles.ctaBtn}>View Thread</button>
      </div>
      <div style={styles.card}>
        <h3 style={styles.topic}>🎤 Open Mic: Pitch an Idea</h3>
        <p style={styles.snippet}>
          Propose new features, collab, or just riff about what’s next in tech and AI.
        </p>
        <button style={styles.ctaBtn}>Start Pitch</button>
      </div>
      {/* More dynamic forum threads will render here... */}
    </section>
  );
}

const styles = {
  forumSection: {
    margin: '3rem auto',
    maxWidth: '640px',
    background: 'rgba(21,24,44,0.95)',
    borderRadius: '1.5rem',
    padding: '2.5rem 2rem',
    boxShadow: '0 0 48px #0ff2, 0 0 8px #232446aa',
  },
  heading: {
    fontSize: '1.65rem',
    color: '#0ff',
    textAlign: 'center',
    marginBottom: '1.8rem',
    textShadow: '0 0 8px #0ff, 0 0 18px #23244688',
    letterSpacing: '0.05em',
    fontWeight: 800
  },
  card: {
    padding: '1.2rem',
    margin: '1.1rem 0',
    borderRadius: '1em',
    background: 'rgba(24,30,52,0.89)',
    border: '1px solid #0ff3',
    boxShadow: '0 0 12px #0ff3',
  },
  topic: {
    margin: '0 0 0.5rem 0',
    fontSize: '1.19rem',
    color: '#fff',
    fontWeight: 700
  },
  snippet: {
    margin: '0 0 1.1rem 0',
    color: '#aad6ff',
    fontSize: '1.07rem'
  },
  ctaBtn: {
    padding: '0.5em 1.7em',
    fontSize: '1.1rem',
    fontWeight: 700,
    color: '#090a2e',
    background: 'linear-gradient(90deg,#0ff3,#2438FF44)',
    border: 'none',
    borderRadius: '2em',
    boxShadow: '0 0 10px #0ff3',
    cursor: 'pointer',
    transition: 'all .15s'
  }
};
