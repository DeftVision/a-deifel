// src/components/Navbar.jsx
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import logo from '../assets/Logo.png';

const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'About',    href: '#about'    },
    { label: 'Contact',  href: '#contact'  },
    { label: 'Areas We Serve',  href: '#areas'  },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (state) => () => setOpen(state);

    const DesktopLinks = () => (
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
            {navLinks.map(({ label, href }) => (
                <Button key={label} href={href} color="inherit">
                    {label}
                </Button>
            ))}
        </Box>
    );

    const MobileLinks = () => (
        <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
            <List sx={{ width: 200 }}>
                {navLinks.map(({ label, href }) => (
                    <ListItem key={label} disablePadding onClick={toggleDrawer(false)}>
                        <ListItemButton component="a" href={href}>
                            <ListItemText primary={label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );

    return (
        <>
            <AppBar position="sticky" color="default" elevation={1}>
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    {/* Brand */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Box
                            component="img"
                            src={logo}
                            alt="4Ever Concrete Coatings"
                            sx={{ width: 40, height: 'auto' }}
                        />
                        <Typography variant="h6" component="span" sx={{ fontWeight: 700 }}>
                            4Ever Concrete Coatings
                        </Typography>
                    </Box>

                    {/* Desktop links */}
                    <DesktopLinks />

                    {/* Burger (mobile) */}
                    <IconButton
                        edge="end"
                        color="inherit"
                        onClick={toggleDrawer(true)}
                        sx={{ display: { xs: 'flex', md: 'none' } }}
                        aria-label="menu"
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* Drawer */}
            <MobileLinks />
        </>
    );
}
