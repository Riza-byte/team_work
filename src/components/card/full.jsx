import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Stack } from "@mui/material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import DynamicFormIcon from '@mui/icons-material/DynamicForm';


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const work = [
    { img: '/red-car-red-background_963387-1050.png', title1: "Yil: 2024", title2: "Probeg: 150,000 KM", description: "Dvigatel: 3.0L S58 Twin-Turbo" },
    { img: '/bmw-5-10.jpg', title1: "Yil: 2023", title2: "Probeg: 100,000 KM", description: "Dvigatel: Electric" },
    { img: '/IMGL8606-min-scaled-1.webp', title1: "Yil: 2022", title2: "Probeg: 90,000 KM", description: "Dvigatel: G70" },
    { img: '/rollse1.jpg', title1: "Yil: 2022", title2: "Probeg: 48,000 KM", description: "Dvigatel: V12" },
    { img: '/Rolls-Royce_Wraith_Black_Arrow_2.jpg', title1: "Yil: 2024", title2: "Probeg: 27,000 KM", description: "Dvigatel: V12 Twin-Turbo" },
    { img: '/rolls-royce-phantom-goldfinger_large.png', title1: "Yil: 2024", title2: "Probeg: 30,000 KM", description: "Dvigatel: V12 Twin-Turbo" }
];

const Full = () => {
    return (
        <Box sx={{ py: '50px', px: '20px', backgroundColor: '#121212', minHeight: '100vh' }}>
            <Typography variant="h4" sx={{ color: 'red', textAlign: 'center', mb: 4, fontWeight: 'bold', textTransform: 'uppercase' }}>
                Premium Avtomobillar
            </Typography>

            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                navigation={true}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }, 
                }}
                className="mySwiper"
                style={{ padding: '40px 0' }}
            >
                {work.map((item, index) => (
                    <SwiperSlide key={index} style={{ width: '350px' }}>
                        <Card sx={{ 
                            width: '350px', 
                            height: '420px', 
                            borderRadius: '25px', 
                            bgcolor: '#202020', 
                            boxShadow: '0 0 20px rgba(255, 0, 0, 0.2)', 
                            transition: '0.4s ease-in-out',
                            border: '1px solid rgba(255, 255, 255, 0.05)',
                            '&:hover': {
                                transform: 'translateY(-10px)',
                                boxShadow: '0 0 30px rgba(255, 40, 40, 0.5)',
                                border: '1px solid red'
                            }
                        }}>
                            <CardMedia 
                                component="img"
                                image={item.img}
                                alt="Car Image"
                                sx={{ width: '100%', height: '200px', objectFit: 'cover' }}
                            />

                            <CardContent sx={{ pt: '25px' }}>
                                <Stack spacing={2}>
                                    <Stack direction={'row'} alignItems={'center'} gap={'12px'}>
                                        <AccessTimeIcon sx={{ color: 'red', fontSize: '22px' }} />
                                        <Typography sx={{ fontSize: '16px', color: '#eee', fontWeight: '600' }}>
                                            {item.title1}
                                        </Typography>
                                    </Stack>

                                    <Stack direction={'row'} alignItems={'center'} gap={'12px'}>
                                        <AvTimerIcon sx={{ color: 'red', fontSize: '22px' }} />
                                        <Typography sx={{ fontSize: '16px', color: '#eee', fontWeight: '600' }}>
                                            {item.title2}
                                        </Typography>
                                    </Stack>

                                    <Stack direction={'row'} alignItems={'center'} gap={'12px'}>
                                        <DynamicFormIcon sx={{ color: 'red', fontSize: '22px' }} />
                                        <Typography sx={{ fontSize: '16px', color: '#eee', fontWeight: '600' }}>
                                            {item.description}
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </CardContent>
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>

           
            <style>
                {`
                    .swiper-pagination-bullet { background: #555 !important; }
                    .swiper-pagination-bullet-active { background: red !important; }
                    .swiper-button-next, .swiper-button-prev { color: red !important; }
                `}
            </style>
        </Box>
    );
}

export default Full;