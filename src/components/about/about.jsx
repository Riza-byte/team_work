import React from 'react';
import { Box, Typography, Container, Grid, Button } from '@mui/material';
import TelegramIcon from '@mui/icons-material/Telegram';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact = () => {
  return (
    <Box sx={{ 
      bgcolor: '#000', 
      color: '#fff', 
      minHeight: '100vh', 
      pt: { xs: 12, md: 20 }, 
      pb: 10,
      background: 'radial-gradient(circle at top right, #1a0000, #000)'
    }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: { xs: 8, md: 12 }, textAlign: 'center' }}>
          <Typography variant="h2" sx={{ fontWeight: 900, textTransform: 'uppercase', letterSpacing: 2, fontSize: { xs: '2.5rem', md: '4rem' } }}>
            Biz bilan <span style={{ color: '#CC0000' }}>Bog'laning</span>
          </Typography>
          <Typography variant="body1" sx={{ color: '#666', mt: 2, fontSize: '1.1rem' }}>
            Savollaringiz bormi? Biz sizga premium darajadagi xizmatni kafolatlaymiz.
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          

          <Grid item xs={12} md={10}>
            <Grid container spacing={3}>
              
              <Grid item xs={12} md={4}>
                <Box sx={{ p: 4, bgcolor: '#0a0a0a', border: '1px solid #1a1a1a', textAlign: 'center', transition: '0.3s', '&:hover': { borderColor: '#CC0000' } }}>
                  <PhoneIcon sx={{ color: '#CC0000', fontSize: 40, mb: 2 }} />
                  <Typography variant="caption" sx={{ color: '#444', display: 'block', fontWeight: 'bold' }}>TELEFON</Typography>
                  <Typography variant="h6">+998 90 760 47 41</Typography>
                </Box>
              </Grid>

              <Grid item xs={12} md={4}>
                <Box sx={{ p: 4, bgcolor: '#0a0a0a', border: '1px solid #1a1a1a', textAlign: 'center', transition: '0.3s', '&:hover': { borderColor: '#CC0000' } }}>
                  <LocationOnIcon sx={{ color: '#CC0000', fontSize: 40, mb: 2 }} />
                  <Typography variant="caption" sx={{ color: '#444', display: 'block', fontWeight: 'bold' }}>MANZIL</Typography>
                  <Typography variant="h6">Andijon, Premium Plaza</Typography>
                </Box>
              </Grid>

              <Grid item xs={12} md={4}>
                <Box sx={{ p: 4, bgcolor: '#0a0a0a', border: '1px solid #1a1a1a', textAlign: 'center', transition: '0.3s', '&:hover': { borderColor: '#CC0000' } }}>
                  <Box sx={{ color: '#CC0000', fontSize: 40, mb: 2, fontWeight: 'bold' }}>24/7</Box>
                  <Typography variant="caption" sx={{ color: '#444', display: 'block', fontWeight: 'bold' }}>XIZMAT VAQTI</Typography>
                  <Typography variant="h6">Haftada 7 kun</Typography>
                </Box>
              </Grid>

            </Grid>
          </Grid>

          <Grid item xs={12} sx={{ mt: 8, textAlign: 'center' }}>
            <Typography variant="h5" sx={{ mb: 4, fontWeight: 300 }}>
              Tezkor javob olish uchun bizga yozing:
            </Typography>
            
            <Button 
              component="a"
              href="https://t.me/+998907604741"
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<TelegramIcon sx={{ fontSize: '2rem !important' }} />}
              sx={{ 
                bgcolor: '#CC0000', 
                color: '#fff', 
                px: { xs: 4, md: 10 }, 
                py: 2.5, 
                fontWeight: 900, 
                borderRadius: 0,
                fontSize: '1.2rem',
                letterSpacing: 1,
                boxShadow: '0 10px 30px rgba(204, 0, 0, 0.4)',
                transition: '0.4s',
                '&:hover': { 
                  bgcolor: '#ff0000',
                  boxShadow: '0 15px 40px rgba(255, 0, 0, 0.6)',
                  transform: 'scale(1.05)'
                } 
              }}
            >
              TELEGRAMDA BOG'LANISH
            </Button>
            <Typography variant="body2" sx={{ color: '#444', mt: 3 }}>
              O'rtacha javob berish vaqti: 5 daqiqa
            </Typography>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;