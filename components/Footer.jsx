"use client";

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Stack,
} from '@mui/material';
import Link from 'next/link';

export default function Footer() {
  return (
    <Box sx={{ bgcolor: '#F3EFFF', color: 'secondary.main', py: 10, mt: 'auto', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
      <Container maxWidth="lg">
        <Grid container spacing={8}>
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 3 }}>
              <img 
                src="/rm-services-logo.png" 
                alt="Logo RM SERVICES" 
                style={{ height: 60, display: 'block' }} 
              />
            </Box>
            <Typography variant="body2" color="text.secondary">
              Solutions professionnelles en Réseau, Sécurité et Communication. Expertise et excellence au service de votre infrastructure.
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={6} justifyContent="flex-end">
              <Box>
                <Typography variant="h6" sx={{ mb: 2 }}>Services</Typography>
                <Stack spacing={1}>
                  <Typography variant="body2" sx={{ opacity: 0.7 }}>Câblage & Infrastructure</Typography>
                  <Typography variant="body2" sx={{ opacity: 0.7 }}>Installation Réseau</Typography>
                  <Typography variant="body2" sx={{ opacity: 0.7 }}>Vidéosurveillance</Typography>
                  <Typography variant="body2" sx={{ opacity: 0.7 }}>Téléphonie IP</Typography>
                  <Typography variant="body2" sx={{ opacity: 0.7 }}>Systèmes d'Alarme</Typography>
                  <Typography variant="body2" sx={{ opacity: 0.7 }}>Contrôle d'Accès</Typography>
                  <Typography variant="body2" sx={{ opacity: 0.7 }}>Maintenance & Support</Typography>
                </Stack>
              </Box>
              <Box>
                <Typography variant="h6" sx={{ mb: 2 }}>Contact</Typography>
                <Stack spacing={1}>
                  <Link href="/contact" passHref style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Typography variant="body2" sx={{ opacity: 0.7, '&:hover': { opacity: 1, color: 'primary.main' } }}>
                      contact@rmservices.com
                    </Typography>
                  </Link>
                  <Link href="/contact" passHref style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Typography variant="body2" sx={{ opacity: 0.7, '&:hover': { opacity: 1, color: 'primary.main' } }}>
                      +241 66 12 14 65
                    </Typography>
                  </Link>
                  <Link href="/contact" passHref style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Typography variant="body2" sx={{ opacity: 0.7, '&:hover': { opacity: 1, color: 'primary.main' } }}>
                      8522, Libreville, Gabon
                    </Typography>
                  </Link>
                </Stack>
              </Box>
            </Stack>
          </Grid>
        </Grid>
        <Box sx={{ mt: 10, pt: 4, borderTop: '1px solid rgba(0,0,0,0.1)', textAlign: 'center' }}>
          <Typography variant="body2" color="text.disabled">
            © {new Date().getFullYear()} RM SERVICES. Tous droits réservés.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
