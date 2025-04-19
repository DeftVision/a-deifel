// components/Services.jsx
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import s1 from '../assets/1.jpg';
import s2 from '../assets/22.png';
import s3 from '../assets/23.png';
import s4 from '../assets/20.png';

const data = [
    { img: s1, title: 'Flake Garage Floors', text: 'Perfect for use on old or new concrete, vinyl chip epoxy and polyaspartic garage ' +
            'floors offer unlimited design capabilities that transform ordinary concrete into a limitless palette of color and design.' },
    { img: s2, title: 'Stained & Dyed Coatings', text: 'Stains and dyes penetrate deep into the pores to create beautiful, ' +
            'unique tones in existing concrete, and are sealed so they last for years.  Stained concrete is perfect for basements, ' +
            'patios, porches, sidewalks, garages, and commercial floors.' },
    { img: s3, title: 'Decorative Overlays', text: 'Sprayed concrete overlay systems are designed to transform ordinary concrete ' +
            'into bold and exciting textured surfaces. Perfect for pool decks, patios, porches and other areas.' },
    {
        img: s4,
        title: 'Metallic Coatings',
        text: 'Metallic epoxy creates a completely custom, one-of-a-kind look for your surface.  It is incredibly durable, completely unique and eye-popping.  ' +
            'You can turn a garage into a literal showroom.  ' +
            'Perfect for residential and commercial spaces, including basements, garages, showrooms, bathrooms, kitchens, entryways and lobbies.'
    },
];

export default function Services() {
    return (
        <Box id="services" sx={{ scrollMarginTop: '80px', py: 8 }}>
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
