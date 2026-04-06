import { Box, Button, CardMedia } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [active, setActive] = useState(0);
    const [indicator, setIndicator] = useState({left: 0, width: 0});
    const buttonRef = useRef([]);

    const navItems = [
        {label: 'home', to: '/'},
        {label: 'premium'},
        {label: 'About'},
        {label: 'Contact'},
        {label: 'Tuning'}
    ];
     
    
   useEffect(() => {
    const upgrade = () => {
        const currentTabs = buttonRef.current[active];
        if(currentTabs) {
            setIndicator ({
                left: currentTabs.offsetLeft,
                width: currentTabs.offsetWidth,
            });
        }
    };
    upgrade();
    window.addEventListener('resize', upgrade);
    return () => window.removeEventListener('resize', upgrade);
   }, [active])
    return (
     <div>
      <Box sx={{ pt: '30px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', pl: '5%', pr: '5%' }}>
              <Box sx={{ width: '80px', display: 'flex', alignItems: 'center' }}>
                <CardMedia 
                component="img"
                image={'/icons8-car-50.png'}
                /> 
            </Box>
   
            <Box sx={{ position: 'relative', display: 'flex', gap: '50px' }}>
                <Box 
                sx={{ position: 'absolute', 
                    height: '40px',
                    bgcolor: 'rgba(255, 40, 40, 0.3)',
                    borderRadius: '20px', 
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    left: indicator.left,
                    width: indicator.width,
                    pointerEvents: 'none',
                    zIndex: 0,
                 }}
                />
              
            {navItems.map((item, index) => (
                <Button 
                key={item.label}
                ref={(you) => (buttonRef.current[index] = you)}
                component={Link}
                to={item.to}
                onClick={() => setActive(index)}
                sx={{ color: '#F5F5F5',  boxShadow: '0px 10px 15px 4px rgba(0, 0, 0, 0.7)',  
                transition: '0.7s', zIndex: 1, borderRadius: '20px'
                }}>
                    {item.label}
                </Button>
            ))}
            </Box>
            

            <Box sx={{ display: 'flex', gap: '10%' }}>
                <Button sx={{ width: '130px', height: '50px', color: '#F5F5F5',  transition: '0.7s ',
                borderRadius: '50px', border: '1px solid #F5F5F5',
                    '&:hover' : {
                        transform: 'scale(1.05)',
                    }
                 }}>
                 Sign In
                </Button>

                <Button sx={{ width: '130px', height: '50px', bgcolor: 'red', color: '#F5F5F5',  transition: '0.7s ',
                borderRadius: '50px', boxShadow: '0px 5px 30px 4px red',
                    '&:hover' : {
                        transform: 'scale(1.05)',
                    }
                 }}>
                 Sign Up
                </Button>
            </Box>
        </Box>
     </Box>
     </div>
    );
}
 
export default Navbar;