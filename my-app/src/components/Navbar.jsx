// src/components/Navbar.jsx
import { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Box,
    Typography,
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Menu,
    MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/Logo.png';

/* ───── static data ───── */
const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'About',    href: '#about'    },
    { label: 'Contact',  href: '#contact'  },
];

const serviceAreas = [
    'Salt Lake City',
    'Utah County',
    'Weber',
    'St. George',
    'Montana',
];

/* ───── component ───── */
export default function Navbar() {
    /* drawer (mobile) */
    const [drawerOpen, setDrawerOpen] = useState(false);
    const toggleDrawer = (state) => () => setDrawerOpen(state);

    /* dropdown menu (desktop) */
    const [areasAnchor, setAreasAnchor] = useState(null);
    const areasOpen = Boolean(areasAnchor);
    const handleAreasOpen  = (e) => setAreasAnchor(e.currentTarget);
    const handleAreasClose = () => setAreasAnchor(null);

    /* desktop links */
    const DesktopLinks = () => (
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
            {navLinks.map(({ label, href }) => (
                <Button key={label} href={href} color="inherit">
                    {label}
                </Button>
            ))}

            {/* Areas We Serve trigger */}
            <Button
                id="areas-btn"
                color="inherit"
                aria-controls={areasOpen ? 'areas-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={areasOpen ? 'true' : undefined}
                onClick={handleAreasOpen}
            >
                Areas&nbsp;We&nbsp;Serve
            </Button>

            {/* dropdown menu */}
            <Menu
                id="areas-menu"
                anchorEl={areasAnchor}
                open={areasOpen}
                onClose={handleAreasClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                transformOrigin={{ vertical: 'top',    horizontal: 'left' }}
                sx={{ mt: 1 }}
            >
                {serviceAreas.map((area) => (
                    <MenuItem key={area} onClick={handleAreasClose}>
                        {area}
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    );

    /* mobile links */
    const MobileLinks = () => (
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
            <List sx={{ width: 220 }}>
                {[...navLinks, { label: 'Areas We Serve', href: '#areas' }].map(
                    ({ label, href }) => (
                        <ListItem key={label} disablePadding onClick={toggleDrawer(false)}>
                            <ListItemButton component="a" href={href}>
                                <ListItemText primary={label} />
                            </ListItemButton>
                        </ListItem>
                    )
                )}
            </List>
        </Drawer>
    );

    return (
        <>
            {/* ── top bar ── */}
            <AppBar position="sticky" color="default" elevation={1}>
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    {/* brand/logo */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Box
                            component="img"
                            src={logo}
                            alt="4Ever Concrete Coatings"
                            sx={{ width: 40, height: 'auto' }}
                        />
                        <Typography variant="h6" sx={{ fontWeight: 700 }}>
                            4Ever Concrete Coatings
                        </Typography>
                    </Box>

                    <DesktopLinks />

                    {/* burger (mobile) */}
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

            {/* mobile drawer */}
            <MobileLinks />
        </>
    );
}
