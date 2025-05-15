// src/components/Hero.jsx
import { Box, Typography, Button, Container, Stack } from '@mui/material';
import heroFloor from '../assets/1.webp';
import logo from '../assets/full-logo-transparent.png';

export default function Hero() {
    return (
        <Box
            id="top"
            sx={{
                position: 'relative',
                minHeight: { xs: '45vh' },
                backgroundImage: `url(${heroFloor})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                py: { xs: 4, md: 8 },
                color: 'white',
            }}
        >
            <Box sx={{ width: '100%', py: 2, backgroundColor: 'rgb(0,0,0)' }}>
                <Container maxWidth="lg">
                    <Stack
                        direction={{ xs: 'column', md: 'row' }}
                        spacing={{ xs: 4, md: 8 }}
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        {/* Logo */}
                        <Box
                            component="img"
                            src={logo}
                            alt="4Ever Concrete Coatings"
                            sx={{
                                maxWidth: { xs: 140, md: 260 },
                                height: 'auto',
                                mx: { xs: 'auto' },
                                filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.3))',
                            }}
                        />

                        {/* Heading & CTA */}
                        <Box sx={{ flex: 1 }}>
                            <Typography
                                variant="h2"
                                sx={{
                                    fontSize: {
                                        xs: '2rem',
                                        sm: '2.5rem',
                                        md: '3rem',
                                        lg: '3.5rem',
                                    },
                                    mb: 3,
                                    textAlign: { xs: 'center', md: 'left' },
                                    fontWeight: 600,
                                }}
                            >
                                We bring your concrete to life.
                            </Typography>
                            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                                <Button href="#services" variant="contained" color="primary">
                                    Our Services
                                </Button>
                            </Box>
                        </Box>
                    </Stack>
                </Container>
            </Box>
        </Box>
    );
}
