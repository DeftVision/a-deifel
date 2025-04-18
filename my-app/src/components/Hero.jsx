// components/Hero.jsx
import { Box, Typography, Button, Container } from '@mui/material';
import heroFloor from '../assets/1.jpg';

export default function Hero() {
    return (
        <Box
            id="top"
            sx={{
                position: 'relative',
                height: { xs: '60vh', md: '80vh' },
                color: 'white',
                backgroundImage: `url(${heroFloor})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
            }}
        >
            <Container maxWidth="md" sx={{ backgroundColor: 'rgba(0,0,0,0.5)', p: 4, borderRadius: 2 }}>
                <Typography variant="h2" sx={{ mb: 2 }}>
                    We bring your concrete to life
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam libero risus, aliquet non commodo at.
                </Typography>
                <Button href="#services" variant="contained" color="primary">
                    Our Services
                </Button>
            </Container>
        </Box>
    );
}
