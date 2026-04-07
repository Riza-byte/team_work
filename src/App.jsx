import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material'; // Buni tepaga chiqardik

// Komponentlar
import Footer from './components/footer/footer'; 
import Full from './components/card/full';
import Navbar from './components/navbar/navbar';
import Tuning from './components/tuning/tuning'; 
import Contact from './components/about/about';
function App() {
  return (
    <Box className="App" sx={styles.container}>
      <Navbar />
      
      {/* Asosiy kontent qismi */}
      <Box sx={{ flex: 1, pt: '100px' }}> 
        <Routes>
          <Route path="/" element={<Full />} />
          <Route path="/tuning" element={<Tuning />} />
          {/* Kelajakda boshqa sahifalar uchun:
          <Route path="/premium" element={<Premium />} />
          <Route path="/about" element={<About />} /> */}
          <Route path="/contact" element={<Contact />} /> 
         
        </Routes>
      </Box>

      <Footer />
    </Box>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: '#0a0a0a', 
    color: 'white',
  }
};

export default App;