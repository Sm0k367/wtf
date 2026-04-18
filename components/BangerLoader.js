// components/BangerLoader.js

export default function BangerLoader({ label = "Loading epic sh*t..." }) {
  return (
    <div style={styles.wrap}>
      <div style={styles.ring}>
        <div style={styles.spark} />
        <div style={styles.spark2} />
      </div>
      <div style={styles.text}>{label}</div>
    </div>
  );
}

const glow = '0 0 32px #0ff, 0 0 80px #0ff8, 0 0 14px #23244688';

const styles = {
  wrap: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 144,
  },
  ring: {
    width: 70,
    height: 70,
    border: '6px solid #0ff3',
    borderRadius: '50%',
    borderTop: '6px solid #181a32',
    borderBottom: '6px solid #181a32',
    boxShadow: glow,
    position: 'relative',
    animation: 'spinRing 1.35s linear infinite',
  },
  spark: {
    position: 'absolute',
    top: 4,
    left: 28,
    width: 15,
    height: 15,
    borderRadius: '50%',
    background: 'radial-gradient(ellipse at center,#fff,#0ff5 60%,#0ff0 80%)',
    filter: 'blur(1.5px)',
    animation: 'flash 1.89s infinite linear'
  },
  spark2: {
    position: 'absolute',
    top: 47,
    left: 45,
    width: 7,
    height: 7,
    borderRadius: '50%',
    background: '#0ff6',
    filter: 'blur(0.7px)',
    animation: 'flash 2.5s infinite reverse'
  },
  text: {
    color: '#0ff',
    textShadow: glow,
    fontWeight: 700,
    marginTop: 28,
    fontSize: '1.15rem',
    letterSpacing: '0.04em',
    textAlign: 'center'
  }
};

// Extra CSS animations
if (typeof window !== 'undefined' && !document.getElementById('banger-loader-style')) {
  const style = document.createElement('style');
  style.id = 'banger-loader-style';
  style.innerHTML = `
    @keyframes spinRing { 0% { transform:rotate(0); } 100% { transform:rotate(360deg); } }
    @keyframes flash { 0%,100% {opacity:.7;} 50%{opacity:.13;} }
  `;
  document.head.appendChild(style);
}
