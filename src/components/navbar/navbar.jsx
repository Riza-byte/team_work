import { Box, Button, CardMedia } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const [indicator, setIndicator] = useState({ left: 0, width: 0 });
    const buttonRef = useRef([]);

    const navItems = [
        { label: 'home', to: '/' },
        { label: 'premium', to: '/premium' },
        { label: 'About', to: '/about' },
        { label: 'Contact', to: '/contact' },
        { label: 'Tuning', to: '/tuning' }
    ];

    // Hozirgi sahifaga qarab indexni topish
    const activeIndex = navItems.findIndex(item => item.to === location.pathname);
    const active = activeIndex === -1 ? 0 : activeIndex;

    useEffect(() => {
        const upgrade = () => {
            const currentTab = buttonRef.current[active];
            if (currentTab) {
                setIndicator({
                    left: currentTab.offsetLeft,
                    width: currentTab.offsetWidth,
                });
            }
        };
        
        // Rasm va fontlar yuklanishini kutish uchun ozgina delay yoki darhol chaqirish
        upgrade();
        window.addEventListener('resize', upgrade);
        return () => window.removeEventListener('resize', upgrade);
    }, [active]);

    return (
        <Box sx={{ pt: '30px', width: '100%', position: 'fixed', top: 0, zIndex: 1000, bgcolor: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(10px)' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: '5%', pb: '15px' }}>
                
                {/* Logo Section */}
                <Box sx={{ width: '60px', display: 'flex', alignItems: 'center' }}>
                    <CardMedia 
                        component="img"
                        image={'/icons8-car-50.png'}
                        sx={{ filter: 'drop-shadow(0 0 5px red)' }} // Logoga qizil effekt
                    /> 
                </Box>

                {/* Navigation Links */}
                <Box sx={{ position: 'relative', display: 'flex', gap: '20px', alignItems: 'center' }}>
                    <Box 
                        sx={{ 
                            position: 'absolute', 
                            height: '40px',
                            bgcolor: 'rgba(255, 0, 0, 0.4)', // Biroq yorqinroq qizil
                            borderRadius: '20px', 
                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                            left: indicator.left,
                            width: indicator.width,
                            pointerEvents: 'none',
                            zIndex: 0,
                            boxShadow: '0 0 15px rgba(255, 0, 0, 0.5)'
                        }}
                    />
                    
                    {navItems.map((item, index) => (
                        <Button 
                            key={item.label}
                            ref={(el) => (buttonRef.current[index] = el)}
                            component={Link}
                            to={item.to}
                            sx={{ 
                                color: active === index ? '#fff' : '#aaa', 
                                px: 3,
                                py: 1,
                                zIndex: 1, 
                                borderRadius: '20px',
                                textTransform: 'uppercase',
                                fontSize: '0.85rem',
                                fontWeight: 'bold',
                                transition: '0.3s ease',
                                '&:hover': { color: '#fff' }
                            }}
                        >
                            {item.label}
                        </Button>
                    ))}
                </Box>

                {/* Auth Buttons */}
                <Box sx={{ display: 'flex', gap: '15px' }}>
                    <Button sx={{ 
                        width: '110px', height: '40px', color: '#F5F5F5', 
                        borderRadius: '50px', border: '1px solid rgba(255,255,255,0.3)',
                        transition: '0.3s',
                        '&:hover': { borderColor: '#fff', transform: 'translateY(-2px)' }
                    }}>
                        Sign In
                    </Button>

                    <Button sx={{ 
                        width: '110px', height: '40px', bgcolor: '#ff0000', color: '#fff', 
                        borderRadius: '50px', boxShadow: '0px 5px 20px rgba(255, 0, 0, 0.5)',
                        transition: '0.3s',
                        '&:hover': { bgcolor: '#cc0000', transform: 'translateY(-2px)', boxShadow: '0px 8px 25px rgba(255, 0, 0, 0.7)' }
                    }}>
                        Sign Up
                    </Button>
                </Box>

            </Box>
        </Box>
    );
}

export default Navbar;