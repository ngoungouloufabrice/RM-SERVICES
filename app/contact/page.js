"use client";

import React, { useState } from 'react';
import {
  Box, Container, Typography, Grid, TextField, Button, Stack, Card,
} from '@mui/material';
import OfficeLocationCard from '../../components/OfficeLocationCard';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import RouterIcon from '@mui/icons-material/Router';
import VideocamIcon from '@mui/icons-material/Videocam';
import PhoneIcon from '@mui/icons-material/Phone';
import SecurityIcon from '@mui/icons-material/Security';
import LockIcon from '@mui/icons-material/Lock';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import BusinessIcon from '@mui/icons-material/Business';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import {
  FadeInUp, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem,
  HoverLift, AnimatedButton, WordStagger,
} from '../../components/animations';

const SERVICES = [
  { id: 'cabling', label: 'Câblage & Infrastructure Réseau', icon: <SettingsEthernetIcon /> },
  { id: 'network', label: 'Installation & Configuration Réseau', icon: <RouterIcon /> },
  { id: 'video', label: 'Vidéosurveillance', icon: <VideocamIcon /> },
  { id: 'telephony', label: 'Téléphonie & Communication', icon: <PhoneIcon /> },
  { id: 'alarms', label: 'Systèmes d\'Alarme', icon: <SecurityIcon /> },
  { id: 'access', label: 'Contrôle d\'Accès', icon: <LockIcon /> },
  { id: 'maintenance', label: 'Maintenance & Support Technique', icon: <SupportAgentIcon /> },
];

export default function ContactPage() {
  const [selectedServices, setSelectedServices] = useState([]);
  const handleServiceToggle = (id) =>
    setSelectedServices(prev => prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]);

  return (
    <Box sx={{ bgcolor: 'white', minHeight: '100vh', pt: 0, pb: 12 }}>
      <Container maxWidth="lg" sx={{ pt: { xs: 12, md: 16 } }}>

        {/* ── Header ─────────────────────────────────── */}
        <Box sx={{ mb: 8 }}>
          <FadeInUp delay={0.1}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
              <Box sx={{ width: 40, height: 2, bgcolor: 'primary.main' }} />
              <Typography variant="overline" sx={{ fontWeight: 700, letterSpacing: 3, color: 'primary.main', fontSize: '0.7rem' }}>
                CONTACT
              </Typography>
            </Box>
          </FadeInUp>
          <Box sx={{ mb: 4, fontSize: { xs: '1.9rem', md: '2.4rem', lg: '2.8rem' }, fontWeight: 900, lineHeight: 1.18, letterSpacing: '-0.02em', color: 'text.primary' }}>
            <WordStagger text="Donnons vie à votre infrastructure réseau & sécurité" delay={0.15} />
          </Box>
          <FadeInUp delay={0.7}>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 700, fontWeight: 400, lineHeight: 1.7, mt: 2 }}>
              Installation de réseaux informatiques, câblage structuré, vidéosurveillance,
              téléphonie IP, systèmes d'alarme et contrôle d'accès. Des solutions fiables,
              sécurisées et adaptées à vos besoins.
            </Typography>
          </FadeInUp>
        </Box>

        <Grid container spacing={8}>
          {/* ── Left: Form ─────────────────────────── */}
          <Grid item xs={12} lg={8}>
            <FadeInLeft>
              <Stack spacing={4}>
                {/* Identity */}
                <HoverLift y={-3} scale={1.005}>
                  <Card sx={{ p: 4, borderRadius: 2, border: '1px solid', borderColor: 'divider', boxShadow: 'none' }}>
                    <Typography variant="h6" sx={{ fontWeight: 800, mb: 4, display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <PersonIcon color="primary" /> Informations de contact
                    </Typography>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="Nom complet" placeholder="Jean Dupont" InputProps={{ sx: { borderRadius: 2 } }} />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="Nom de l'entreprise" placeholder="Entreprise SARL" InputProps={{ sx: { borderRadius: 2 } }} />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="Adresse email" placeholder="contact@email.com" InputProps={{ sx: { borderRadius: 2 }, startAdornment: <EmailIcon sx={{ mr: 1, color: 'text.disabled', fontSize: 20 }} /> }} />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="Téléphone" placeholder="+241 77 00 00 00" InputProps={{ sx: { borderRadius: 2 }, startAdornment: <PhoneIcon sx={{ mr: 1, color: 'text.disabled', fontSize: 20 }} /> }} />
                      </Grid>
                    </Grid>
                  </Card>
                </HoverLift>

                {/* Services */}
                <Card sx={{ p: 4, borderRadius: 2, border: '1px solid', borderColor: 'divider', boxShadow: 'none' }}>
                  <Typography variant="h6" sx={{ fontWeight: 800, mb: 4, display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Stack direction="row" spacing={1} sx={{ color: 'primary.main' }}><SettingsEthernetIcon /></Stack>
                    Services d'intérêt
                  </Typography>
                  <StaggerContainer staggerDelay={0.06}>
                    <Grid container spacing={2}>
                      {SERVICES.map((service) => (
                        <Grid item xs={12} sm={4} key={service.id}>
                          <StaggerItem>
                            <HoverLift y={-4} scale={1.02}>
                              <Box
                                onClick={() => handleServiceToggle(service.id)}
                                sx={{
                                  p: 3, height: 140, borderRadius: 2,
                                  border: '2px solid',
                                  borderColor: selectedServices.includes(service.id) ? 'primary.main' : 'divider',
                                  bgcolor: selectedServices.includes(service.id) ? 'rgba(93,52,139,0.05)' : 'transparent',
                                  cursor: 'pointer', transition: 'all 0.2s',
                                  '&:hover': { borderColor: 'primary.main', bgcolor: 'rgba(93,52,139,0.02)' },
                                  display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', gap: 1.5
                                }}
                              >
                                <Box sx={{ color: selectedServices.includes(service.id) ? 'primary.main' : 'text.secondary' }}>
                                  {service.icon}
                                </Box>
                                <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                                  {service.label}
                                </Typography>
                              </Box>
                            </HoverLift>
                          </StaggerItem>
                        </Grid>
                      ))}
                    </Grid>
                  </StaggerContainer>
                </Card>

                {/* Project Details */}
                <HoverLift y={-3} scale={1.005}>
                  <Card sx={{ p: 4, borderRadius: 2, border: '1px solid', borderColor: 'divider', boxShadow: 'none' }}>
                    <Typography variant="h6" sx={{ fontWeight: 800, mb: 4, display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <BusinessIcon color="primary" /> Détails du projet
                    </Typography>
                    <TextField fullWidth multiline rows={4} label="Description du projet" placeholder="Décrivez vos besoins techniques..." InputProps={{ sx: { borderRadius: 2 } }} />
                  </Card>
                </HoverLift>

                <FadeInUp delay={0.2}>
                  <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', justifyContent: 'space-between', gap: 3 }}>
                    <Typography variant="caption" color="text.secondary" sx={{ maxWidth: 400 }}>
                      En envoyant ce formulaire, vous acceptez notre politique de confidentialité.
                    </Typography>
                    <AnimatedButton>
                      <Button variant="contained" size="large" sx={{ borderRadius: 2, px: 6, py: 1.5, fontWeight: 800, boxShadow: '0 8px 24px rgba(93,52,139,0.2)', '&:hover': { boxShadow: '0 12px 32px rgba(93,52,139,0.3)' } }}>
                        Envoyer la demande
                      </Button>
                    </AnimatedButton>
                  </Box>
                </FadeInUp>
              </Stack>
            </FadeInLeft>
          </Grid>

          {/* ── Right: Info Sidebar ─────────────────── */}
          <Grid item xs={12} lg={4}>
            <FadeInRight delay={0.2}>
              <OfficeLocationCard />
            </FadeInRight>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
