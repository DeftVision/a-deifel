// components/Footer.jsx
import { Box, Typography } from '@mui/material';

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{ textAlign: 'center', py: 4, bgcolor: '#111', color: '#aaa' }}
        >
            <Typography variant="body2">
                © {new Date().getFullYear()} 4Ever Concrete Coatings • All rights reserved
            </Typography>
        </Box>
    );
}
