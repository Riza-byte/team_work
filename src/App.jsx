import React from 'react';
import './App.css';
// Footer komponenting yo'li sening strukturang bo'yicha:
import Footer from './components/footer/footer'; 

function App() {
  return (
    <div className="App" style={styles.container}>
      {/* Asosiy qism */}
      <main style={styles.mainContent}>
        <div style={styles.hero}>
          <h1 style={styles.title}></h1>
          <p style={styles.subtitle}>
            
          </p>
          <button style={styles.button}></button>
        </div>
      </main>

      {/* Sening Footering */}
      <Footer />
    </div>
  );
}

// Bir oz vizual go'zallik uchun inline stillar
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: '#0a0a0a', // To'q qora fon
    color: 'white',
  },
  mainContent: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  hero: {
    padding: '20px',
  },
  title: {
    fontSize: '3rem',
    color: '#ff4d4d',
    marginBottom: '10px',
    textTransform: 'uppercase',
    letterSpacing: '5px',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#888',
    marginBottom: '30px',
  },
  button: {
    padding: '12px 35px',
    backgroundColor: 'transparent',
    color: '#ff4d4d',
    border: '2px solid #ff4d4d',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
    transition: '0.3s all',
  }
};

export default App;

