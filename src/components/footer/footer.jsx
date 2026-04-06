import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.section}>
          <h2 style={styles.logo}>MAKIMA</h2>
          <p style={styles.text}>
            Nazorat va tartib — muvaffaqiyatning kalitidir. 
            Biz bilan hammasi reja asosida ketadi.
          </p>
        </div>

        <div style={styles.section}>
          <h3 style={styles.title}>Havolalar</h3>
          <ul style={styles.list}>
            <li><a href="#home" style={styles.link}>Asosiy</a></li>
            <li><a href="#services" style={styles.link}>Xizmatlar</a></li>
            <li><a href="#about" style={styles.link}>Biz haqimizda</a></li>
          </ul>
        </div>

        <div style={styles.section}>
          <h3 style={styles.title}>Aloqa</h3>
          <p style={styles.text}>Telegram: @makima_admin</p>
          <p style={styles.text}>Email: control@makima.io</p>
        </div>
      </div>

      <div style={styles.bottomBar}>
        <p>&copy; {currentYear} Makima System. Barcha huquqlar himoyalangan.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#1a1a1a',
    color: '#ffffff',
    padding: '40px 20px 20px 20px',
    fontFamily: 'Arial, sans-serif',
    marginTop: '50px'
  },
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    maxWidth: '1200px',
    margin: '0 auto',
    gap: '20px',
  },
  section: {
    flex: '1',
    minWidth: '200px',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#ff4d4d', // Menga mos keladigan rang
    marginBottom: '10px',
  },
  title: {
    fontSize: '18px',
    marginBottom: '15px',
    borderBottom: '1px solid #333',
    paddingBottom: '5px',
  },
  text: {
    fontSize: '14px',
    lineHeight: '1.6',
    color: '#ccc',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  link: {
    color: '#ccc',
    textDecoration: 'none',
    fontSize: '14px',
    display: 'block',
    marginBottom: '8px',
    transition: 'color 0.3s',
  },
  bottomBar: {
    textAlign: 'center',
    marginTop: '40px',
    paddingTop: '20px',
    borderTop: '1px solid #333',
    fontSize: '12px',
    color: '#777',
  },
};

export default Footer;