import React from 'react';
import './App.css';
import Footer from './components/footer/footer'; 
import Full from './components/card/full';
import Navbar from './components/navbar/navbar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App" style={styles.container}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Full />} />
      </Routes>
      <Footer />
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: '#0a0a0a', 
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

