// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'light',                       // keep normal elevations/shadows
        background: { default: '#95a8ad' },  // page background
        text:       { primary: '#ffffff' },  // global white text
        primary:    { main: '#425054' },     // AppBar & accent colour
    },

    components: {
        /* Darken all Paper-based surfaces (Menu, Drawer, Dialog, etc.) */
        MuiPaper: {
            styleOverrides: {
                root: { backgroundColor: '#425054' },
            },
        },

        /* Make every Outlined TextField blend with the dark theme */
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    /* white typed text */
                    input: { color: '#ffffff' },

                    /* white outline in all states */
                    '& .MuiOutlinedInput-notchedOutline':            { borderColor: '#ffffff' },
                    '&:hover .MuiOutlinedInput-notchedOutline':      { borderColor: '#ffffff' },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline':{ borderColor: '#ffffff' },
                },
            },
        },

        /* White labels for TextFields */
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: '#ffffff',
                    '&.Mui-focused': { color: '#ffffff' },
                },
            },
        },
    },
});

export default theme;
