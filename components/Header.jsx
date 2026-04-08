"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Box,
  Container,
  Typography,
  Button,
  AppBar,
  Toolbar,
  Stack,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const NAV_ITEMS = [
  { label: 'À propos', href: '/a-propos' },
  { label: 'Services', href: '/services' },
  { label: 'Projets', href: '/projets' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {NAV_ITEMS.map((item) => (
          <ListItem key={item.label} disablePadding>
            <Link href={item.href} passHref style={{ textDecoration: 'none', width: '100%' }}>
              <ListItemButton onClick={handleDrawerToggle} sx={{ py: 1.5 }}>
                <ListItemText 
                  primary={item.label} 
                  primaryTypographyProps={{ 
                    sx: { fontWeight: 600, color: 'text.primary' } 
                  }} 
                />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      <Box sx={{ mt: 'auto', pt: 2 }}>
        <Link href="/contact" passHref style={{ textDecoration: 'none' }}>
          <Button 
            fullWidth 
            variant="contained" 
            color="primary" 
            onClick={handleDrawerToggle}
            sx={{ py: 1.5, fontWeight: 700 }}
          >
            Nous contacter
          </Button>
        </Link>
      </Box>
    </Box>
  );

  return (
    <AppBar position="fixed" color="inherit" elevation={0} sx={{
      bgcolor: 'rgba(248, 246, 246, 0.8)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid rgba(0,0,0,0.05)',
      zIndex: (theme) => theme.zIndex.drawer + 1
    }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', height: 64 }}>
          <Link href="/" passHref style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <img
                src="/rm-services-logo.png"
                alt="RM SERVICES Logo"
                style={{ height: 40, width: 'auto', objectFit: 'contain' }}
              />
            </Box>
          </Link>
          
          <Box sx={{ flexGrow: 1 }} />

          {/* Desktop Navigation */}
          <Stack direction="row" spacing={3} sx={{ mr: 4, display: { xs: 'none', md: 'flex' } }}>
            {NAV_ITEMS.map((item) => (
              <Link key={item.label} href={item.href} passHref style={{ textDecoration: 'none' }}>
                <Typography sx={{
                  color: 'text.primary',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  transition: 'color 0.2s',
                  '&:hover': { color: 'primary.main' }
                }}>
                  {item.label}
                </Typography>
              </Link>
            ))}
          </Stack>

          {/* Desktop CTA */}
          <Stack direction="row" spacing={2} alignItems="center" sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Link href="/contact" passHref style={{ textDecoration: 'none' }}>
              <Button variant="contained" color="primary" size="small" sx={{ px: 3, fontWeight: 700 }}>
                Nous contacter
              </Button>
            </Link>
          </Stack>

          {/* Mobile Menu Button */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' }, color: 'primary.main' }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 280,
            bgcolor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
          },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
}

