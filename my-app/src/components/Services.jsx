// src/components/Services.jsx
import { Box, Typography } from '@mui/material';
import ServiceCard from './ServiceCard';

import s1 from '../assets/1.webp';
import s2 from '../assets/22.webp';
import s3 from '../assets/23.webp';
import s4 from '../assets/20.webp';

const services = [
    {
        img: s1,
        title: 'Flake Garage Floors',
        text: 'Perfect for use on old or new concrete, vinyl chip epoxy and polyaspartic garage floors offer unlimited design capabilities that transform ordinary concrete into a limitless palette of color and design.'
    },
    {
        img: s2,
        title: 'Stained & Dyed Coatings',
        text: 'Stains and dyes penetrate deep into the pores to create beautiful, unique tones in existing concrete, and are sealed so they last for years. Stained concrete is perfect for basements, patios, porches, sidewalks, garages, and commercial floors.'
    },
    {
        img: s3,
        title: 'Decorative Overlays',
        text: 'Sprayed concrete overlay systems are designed to transform ordinary concrete into bold and exciting textured surfaces. Perfect for pool decks, patios, porches and other areas.'
    },
    {
        img: s4,
        title: 'Metallic Coatings',
        text: 'Metallic epoxy creates a completely custom, one-of-a-kind look for your surface. It is incredibly durable, completely unique and eye-popping. Perfect for residential and commercial spaces including garages, showrooms, kitchens, entryways, and lobbies.'
    }
];

export default function Services() {
    return (
        <Box
            id="services"
            sx={{
                scrollMarginTop: '80px',
                py: 8,
                backgroundColor: '#95a8ad',
                width: '100%',
            }}
        >
            <Box
                sx={{
                    maxWidth: '1200px',
                    mx: 'auto',
                    px: 2,
                }}
            >
                <Typography
                    variant="h4"
                    component="h2"
                    align="center"
                    gutterBottom
                    sx={{ fontWeight: 'bold', mb: 6 }}
                >
                    Services
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        gap: 3,
                    }}
                >
                    {services.map(({ img, title, text }) => (
                        <Box
                            key={title}
                            sx={{
                                width: {
                                    xs: '100%',
                                    sm: '48%',
                                    md: '23%', // 4 across at desktop
                                },
                            }}
                        >
                            <ServiceCard title={title} text={text} img={img} />
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}
