// components/Toasts.js
import { useState, createContext, useContext } from 'react';

const ToastContext = createContext();

export function useToasts() {
  return useContext(ToastContext);
}

export default function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  function addToast(message, type = 'info', delay = 3200) {
    const id = `${Date.now()}${Math.random()}`;
    setToasts((ts) => [...ts, { id, message, type }]);
    setTimeout(() => {
      setToasts((ts) => ts.filter((t) => t.id !== id));
    }, delay);
  }

  return (
    <ToastContext.Provider value={addToast}>
      {children}
      <div style={styles.toastStack}>
        {toasts.map((t) => (
          <div key={t.id}
            style={{
              ...styles.toast,
              ...typeColors[t.type] || typeColors.info
            }}
            className="ai-glow"
          >
            {t.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

const styles = {
  toastStack: {
    position: 'fixed',
    bottom: 35,
    right: 32,
    zIndex: 3300,
    display: 'flex',
    flexDirection: 'column',
    gap: '1.1em',
    alignItems: 'flex-end'
  },
  toast: {
    background: 'rgba(15,16,30,0.98)',
    color: '#fff',
    fontWeight: 600,
    padding: '1.1em 2.3em',
    borderRadius: '1.7em',
    boxShadow: '0 0 24px #0ff7, 0 0 10px #09f9',
    fontSize: '1.1rem',
    letterSpacing: '0.03em',
    minWidth: '210px',
    animation: 'fadeIn .22s'
  }
};

const typeColors = {
  info: { border: '2.5px solid #0ff', color: '#0ff' },
  success: { border: '2.5px solid #1fff49', color: '#1fff49' },
  warning: { border: '2.5px solid #fd0', color: '#fd0' },
  error: { border: '2.5px solid #ff4e4e', color: '#ff4e4e' }
};
