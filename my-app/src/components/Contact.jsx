// components/Contact.jsx
import { Box, Typography, Container, TextField, Button, Stack } from '@mui/material';

export default function Contact() {
    return (
        <Box id="contact" sx={{ py: 8 }}>
            <Container maxWidth="sm">
                <Typography variant="h4" component="h2" gutterBottom>
                    Contact
                </Typography>

                <Box
                    component="form"
                    onSubmit={(e) => {
                        e.preventDefault();
                        alert('Thanks! We will be in touch soon.');
                    }}
                >
                    <Stack spacing={2}>
                        <TextField label="Name" name="name" fullWidth required  />
                        <TextField label="Email" type="email" name="email" fullWidth required />
                        <TextField
                            label="Message"
                            name="message"
                            fullWidth
                            multiline
                            rows={4}
                            placeholder="Tell us about your project…"
                        />
                        <Button type="submit" variant="contained">
                            Send Message
                        </Button>
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
}
