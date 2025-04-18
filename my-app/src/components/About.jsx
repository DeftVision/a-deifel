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
                    Can you think of a favorite memory, either recently or from years ago?
                    Where are you?  Who is with you?
                    How do you feel now, thinking about it?
                    Some of our favorite memories are often at home, or in the home of a friend or loved one.
                    Your home isn't just a living space, it's how you feel.
                    We often neglect spaces like our garage, basement, porch, patio, driveway, etc., but those spaces aren't just extensions of our home, they are a part of it.
                    Why not turn them into spaces that actually make you FEEL at home?  Spaces you love to look at and hang out in and make you feel good?
                    4Ever Concrete Coatings transforms lifeless residential and commercial surfaces into something beautiful and unique,
                    which adds tremendous value while making your space feel more like, well, home.
                    We provide high-quality service that lasts for many, many years, and guarantee our work to your complete satisfaction.
                </Typography>
            </Container>
        </Box>
    );
}
