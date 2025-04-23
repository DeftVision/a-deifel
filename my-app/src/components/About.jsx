// components/About.jsx
import { Box, Typography, Container } from '@mui/material';

export default function About() {
    return (
        <Box id="about" sx={{ py: 8 }}>
            <Container maxWidth="md">
                <Typography variant="h4" component="h2" gutterBottom>
                    About Us
                </Typography>
                <Typography variant="body1">
                    4Ever Concrete Coatings transforms neglected surfaces, like garage floors, basements, patios, driveways, commercial floors, etc. into vibrant, beautiful spaces that make
                    you FEEL good and bring tremendous VALUE to your home or business.   At 4Ever Concrete Coatings, we bring your concrete to life by providing high-quality service that lasts for many,
                    many years.  We also guarantee our work to your complete satisfaction, as our only goal is to make you happy.  After all, home is much more than just the space where we live, it's how we feel.
                </Typography>
            </Container>
        </Box>
    );
}
