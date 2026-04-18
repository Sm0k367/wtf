// components/TeamSpotlight.js

const crew = [
  {
    name: 'Sm0k367',
    role: 'Founder / Chief Instigator',
    avatar: '/crew-sm0k367.png',
    desc: 'Builds, breaks, remixes – and doesn’t sleep.',
    link: 'https://github.com/Sm0k367'
  },
  {
    name: 'Astra',
    role: 'Charismatic AI Host',
    avatar: '/ai-host-avatar.png',
    desc: 'Digital face of EPIC TECH AI. Never out of ideas.',
    link: '#'
  },
  // Add more crew as you build your legend...
];

export default function TeamSpotlight() {
  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>🌟 Project Crew</h2>
      <div style={styles.crewList}>
        {crew.map((m, i) => (
          <div key={i} style={styles.card}>
            <img src={m.avatar} alt={m.name} style={styles.avatar} />
            <h3 style={styles.nametag}>{m.name}</h3>
            <p style={styles.role}>{m.role}</p>
            <p style={styles.desc}>{m.desc}</p>
            {m.link && (
              <a href={m.link} target="_blank" rel="noopener noreferrer" style={styles.btn}>
                Profile
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    background: 'rgba(15,19,38,0.94)',
    borderRadius: '1.5rem',
    margin: '3rem auto',
    maxWidth: '800px',
    padding: '2.5rem 1.2rem',
    boxShadow: '0 0 38px #0ff4, 0 0 8px #23244688',
  },
  heading: {
    textAlign: 'center',
    color: '#0ff',
    fontWeight: 800,
    fontSize: '1.6rem',
    marginBottom: '2rem',
    textShadow: '0 0 8px #0ff, 0 0 18px #23244688',
  },
  crewList: {
    display: 'flex',
    gap: '2.3rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  card: {
    background: 'rgba(24,30,52,0.88)',
    borderRadius: '1.1rem',
    padding: '1.5rem 1.3rem',
    textAlign: 'center',
    border: '1px solid #0ff3',
    minWidth: '180px',
    boxShadow: '0 0 12px #0ff2',
    flex: '1 1 220px',
    maxWidth: '220px',
  },
  avatar: {
    width: '76px',
    height: '76px',
    borderRadius: '50%',
    objectFit: 'cover',
    background: '#181A32',
    marginBottom: '0.7rem',
    boxShadow: '0 0 14px #0ff5'
  },
  nametag: {
    color: '#0ff',
    fontWeight: 800,
    fontSize: '1.11rem',
    letterSpacing: '0.02em',
    margin: '0.4em 0'
  },
  role: {
    color: '#aad6ff',
    fontSize: '0.98rem',
    margin: 0
  },
  desc: {
    color: '#fff',
    fontSize: '0.99rem',
    margin: '0.6em 0 1em 0'
  },
  btn: {
    padding: '0.32em 1em',
    color: '#181A32',
    background: 'linear-gradient(90deg,#0ff4,#2438FF22)',
    border: 'none',
    borderRadius: '2em',
    fontSize: '0.95rem',
    fontWeight: 700,
    boxShadow: '0 0 8px #0ff5',
    cursor: 'pointer',
    marginTop: '0.5em',
    textDecoration: 'none'
  }
};
