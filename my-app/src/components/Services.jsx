// components/Services.jsx
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import s1 from '../assets/21.png';
import s2 from '../assets/22.png';
import s3 from '../assets/23.png';
import s4 from '../assets/21.png';

const data = [
    { img: s1, title: 'Flake Garage Floors', text: '' },
    { img: s2, title: 'Stamped Concrete Sealing', text: '' },
    { img: s3, title: 'Decorative Overlays', text: '' },
    {
        img: s4,
        title: 'Metallic Coatings',
        text: 'Metallic epoxy creates a completely custom...'
    },
];

export default function Services() {
    return (
        <Box id="services" sx={{ py: 8 }}>
            <Container>
                <Typography variant="h4" component="h2" gutterBottom>
                    Services
                </Typography>

                <Grid container spacing={4}>
                    {data.map(({ img, title, text }) => (
                        <Grid item key={title} xs={12} sm={6} md={3}>
                            <Card elevation={3} sx={{ height: '100%' }}>
                                <CardMedia component="img" height="180" image={img} alt={title} />
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>{title}</Typography>
                                    <Typography variant="body2">{text}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
