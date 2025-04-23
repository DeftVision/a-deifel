import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'light',
        background: { default: '#95a8ad' },
        text: { primary: '#fff' },
        primary: { main: '#425054'}
    },

    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: '#425054'
                }
            }
        }
    }
});

export default theme;
