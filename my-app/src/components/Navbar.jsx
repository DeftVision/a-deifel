// components/Navbar.jsx
import { useState } from 'react';
import logo from '../assets/Logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import {
    AppBar, Toolbar, Drawer, Button, IconButton, Menu, Typography,
    List, ListItem, ListItemButton, ListItemText, Box, MenuItem
} from '@mui/material';

const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
];
const serviceAreas = ['Phoenix', 'Mesa', 'Scottsdale', 'Tempe', 'Chandler'];

export default function Navbar() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const toggleDrawer = (state) => () => setDrawerOpen(state);
    const menuOpen = Boolean(anchorEl);
    const handleMenuClick = (event) => setAnchorEl(event.currentTarget);
    const handleMenuClose = () => setAnchorEl(null);

    return (
        <>
            <AppBar position="sticky" color="default" elevation={1}>
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    {/* Logo + Brand */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Box component="img" src={logo} alt="4Ever Concrete Coatings" sx={{ width: 40 }} />
                        <Typography variant="h6" sx={{ fontWeight: 700 }}>
                            4Ever Concrete Coatings
                        </Typography>
                    </Box>

                    {/* Desktop Links */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3, alignItems: 'center' }}>
                        {navLinks.map(({ label, href }) => (
                            <Button key={label} href={href} color="inherit">{label}</Button>
                        ))}
                        <Box sx={{ display: 'inline-block' }}>
                            <Button
                                id="service-areas-button"
                                aria-controls={menuOpen ? 'service-areas-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={menuOpen ? 'true' : undefined}
                                onClick={handleMenuClick}
                                color="inherit"
                            >
                                Service Areas
                            </Button>
                            <Menu
                                id="service-areas-menu"
                                anchorEl={anchorEl}
                                open={menuOpen}
                                onClose={handleMenuClose}
                                MenuListProps={{ 'aria-labelledby': 'service-areas-button' }}
                            >
                                {serviceAreas.map((area) => (
                                    <MenuItem key={area} onClick={handleMenuClose}>{area}</MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Box>

                    {/* Mobile Menu */}
                    <IconButton
                        edge="end"
                        color="inherit"
                        onClick={toggleDrawer(true)}
                        sx={{ display: { xs: 'flex', md: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                <List sx={{ width: 200 }}>
                    {navLinks.map(({ label, href }) => (
                        <ListItem key={label} disablePadding onClick={toggleDrawer(false)}>
                            <ListItemButton component="a" href={href}>
                                <ListItemText primary={label} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                    <ListItem><ListItemText primary="Service Areas" /></ListItem>
                    {serviceAreas.map((area) => (
                        <ListItem key={area} disablePadding>
                            <ListItemButton onClick={toggleDrawer(false)}>
                                <ListItemText inset primary={area} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </>
    );
}
