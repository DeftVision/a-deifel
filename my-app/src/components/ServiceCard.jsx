// src/components/ServiceCard.jsx
import { useState } from 'react';
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    Button,
    Box
} from '@mui/material';

export default function ServiceCard({ title, text, img }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <Card elevation={4} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardMedia component="img" height="180" image={img} alt={title} />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom>{title}</Typography>

                <Box sx={{ overflow: 'hidden' }}>
                    <Typography
                        variant="body2"
                        sx={{
                            display: '-webkit-box',
                            WebkitLineClamp: expanded ? 'none' : 3,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                        }}
                    >
                        {text}
                    </Typography>
                </Box>

                {text.length > 100 && (
                    <Button onClick={() => setExpanded(!expanded)} size="small" sx={{ mt: 1, color: 'text.primary' }}>
                        {expanded ? 'Show Less' : 'Read More'}
                    </Button>
                )}
            </CardContent>
        </Card>
    );
}
