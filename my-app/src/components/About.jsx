// components/About.jsx
import { Box, Typography, Container } from '@mui/material';

export default function About() {
    return (
        <Box id="about" sx={{ py: 8, bgcolor: '#f4f4f4' }}>
            <Container maxWidth="md">
                <Typography variant="h4" component="h2" gutterBottom>
                    About Us
                </Typography>
                <Typography variant="body1">
                    Can you think of a favorite memory... (same content) ...
                    4Ever Concrete Coatings - Beau
                </Typography>
            </Container>
        </Box>
    );
}
