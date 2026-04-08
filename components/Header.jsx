"use client";

import React from 'react';
import Link from 'next/link';
import {
  Box,
  Container,
  Typography,
  Button,
  AppBar,
  Toolbar,
  Stack,
} from '@mui/material';

export default function Header() {
  return (
    <AppBar position="fixed" color="inherit" elevation={0} sx={{
      bgcolor: 'rgba(248, 246, 246, 0.8)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid rgba(0,0,0,0.05)'
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

          <Stack direction="row" spacing={3} sx={{ mr: 4 }}>
            {[
              { label: 'À propos', href: '/a-propos' },
              { label: 'Services', href: '/services' },
              { label: 'Projets', href: '/projets' },
            ].map((item) => (
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

          <Stack direction="row" spacing={2} alignItems="center">
            <Link href="/contact" passHref style={{ textDecoration: 'none' }}>
              <Button variant="contained" color="primary" size="small" sx={{ px: 3, fontWeight: 700 }}>
                Nous contacter
              </Button>
            </Link>
          </Stack>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
