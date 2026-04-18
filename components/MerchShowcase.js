// components/MerchShowcase.js

export default function MerchShowcase() {
  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>🛒 Limited Edition Merch</h2>
      <div style={styles.grid}>
        <div style={styles.item}>
          <img
            src="/merch-shirt.png"
            alt="Epic Tech AI Neon Tee"
            style={styles.img}
          />
          <h3 style={styles.itemTitle}>Neon Logo Tee</h3>
          <p style={styles.caption}>Glow-in-the-dark logo, ultra-soft, for late-night hacks.</p>
          <button style={styles.btn}>Shop</button>
        </div>
        <div style={styles.item}>
          <img
            src="/merch-cap.png"
            alt="Epic Tech AI Cap"
            style={styles.img}
          />
          <h3 style={styles.itemTitle}>Glitch Cap</h3>
          <p style={styles.caption}>Classic snapback—subtle glitch embroidery, street & studio ready.</p>
          <button style={styles.btn}>Shop</button>
        </div>
        {/* More merch drops here... */}
      </div>
    </section>
  );
}

const styles = {
  section: {
    background: 'rgba(10,14,40,0.92)',
    borderRadius: '1.5rem',
    margin: '3rem auto',
    maxWidth: '760px',
    padding: '2.5rem 1.2rem',
    boxShadow: '0 0 48px #0ff3, 0 0 9px #23244699',
  },
  heading: {
    textAlign: 'center',
    color: '#0ff',
    fontWeight: 800,
    fontSize: '1.7rem',
    letterSpacing: '0.04em',
    marginBottom: '2rem',
    textShadow: '0 0 8px #0ff, 0 0 18px #23244688',
  },
  grid: {
    display: 'flex',
    gap: '2.2rem',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  item: {
    background: 'rgba(26,32,56,0.97)',
    borderRadius: '1.1rem',
    padding: '1.3rem 1.2rem',
    textAlign: 'center',
    border: '1px solid #0ff2',
    width: '210px',
    boxShadow: '0 0 16px #0ff2'
  },
  img: {
    width: '96px',
    height: '96px',
    objectFit: 'cover',
    borderRadius: '0.9rem',
    marginBottom: '1rem',
    background: '#181A32'
  },
  itemTitle: {
    color: '#fff',
    fontWeight: 700,
    fontSize: '1.15rem',
    margin: '0.4rem 0'
  },
  caption: {
    color: '#aad6ff',
    fontSize: '1.02rem',
    minHeight: '2.15em'
  },
  btn: {
    padding: '0.43em 1.2em',
    color: '#090a2e',
    fontWeight: 700,
    background: 'linear-gradient(90deg,#0ff4,#2438FF22)',
    border: 'none',
    borderRadius: '2em',
    boxShadow: '0 0 6px #0ff8',
    fontSize: '1.09rem',
    cursor: 'pointer',
    marginTop: '0.94em'
  }
};
