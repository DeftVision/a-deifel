// components/Contact.jsx
import { Box, Typography, Container, TextField, Button, Stack } from '@mui/material';
import emailjs from '@emailjs/browser';

export default function Contact() {

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            e.target,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        ).then(
            (result) => {
                console.log('Email sent!', result.text);
                alert("Thank you! Your message has been sent.");
            },
            (error) => {
                console.error('Email failed:', error.text);
                alert("Oops, something went wrong. Please try again.");
            }
        );

        e.target.reset(); // Clear the form after sending

        console.log('Service ID:', import.meta.env.VITE_EMAILJS_SERVICE_ID);
        console.log('Template ID:', import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
        console.log('Public Key:', import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

    };

    return (
        <Box id="contact" sx={{ py: 8 }}>
            <Container maxWidth="sm">
                <Typography variant="h4" component="h2" gutterBottom>
                    Contact
                </Typography>

                <Box component="form" onSubmit={sendEmail}>
                    <Stack spacing={2}>
                        <TextField label="Name" name="user_name" fullWidth required />
                        <TextField label="Email" type="email" name="user_email" fullWidth required />
                        <TextField
                            label="Message"
                            name="message"
                            fullWidth
                            multiline
                            rows={4}
                            placeholder="Tell us about your project…"
                            required
                        />
                        <Button type="submit" variant="contained">
                            Send
                        </Button>
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
}
