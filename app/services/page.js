"use client";

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  useTheme,
  alpha
} from '@mui/material';
import {
  Router as RouterIcon,
  Security as SecurityIcon,
  PhoneInTalk as PhoneIcon,
  Build as MaintenanceIcon,
  CheckCircle as CheckIcon,
  ArrowForward as ArrowIcon,
  SupportAgent as SupportIcon,
} from '@mui/icons-material';
import {
  FadeIn,
  FadeInUp,
  FadeInLeft,
  FadeInRight,
  FadeInDown,
  ScaleIn,
  StaggerContainer,
  StaggerItem,
  WordStagger,
  HoverLift,
  HoverScale,
  AnimatedButton,
  IconPulse,
  CountUp,
} from '../../components/animations';

const SERVICES_PILLARS = [
  {
    id: 'infrastructure',
    title: 'Infrastructure & Réseau',
    icon: <RouterIcon />,
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop',
    description: 'Conception et déploiement d\'architectures réseau robustes et évolutives pour supporter votre croissance.',
    items: [
      'Câblage structuré (Cuivre & Fibre)',
      'Installation de baies de brassage',
      'Configuration Switchs & Routers',
      'Solutions Wi-Fi haute densité'
    ]
  },
  {
    id: 'securite',
    title: 'Sécurité & Protection',
    icon: <SecurityIcon />,
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=800&auto=format&fit=crop',
    description: 'Solutions de surveillance et de contrôle intelligentes pour protéger vos actifs et vos collaborateurs.',
    items: [
      'Vidéosurveillance IP & Analogique',
      'Systèmes d\'Alarme anti-intrusion',
      'Contrôle d\'Accès (Bio, Badge, Code)',
      'Détection incendie & périmétrique'
    ]
  },
  {
    id: 'communication',
    title: 'Communication Business',
    icon: <PhoneIcon />,
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=800&auto=format&fit=crop',
    description: 'Optimisez vos échanges avec des systèmes de téléphonie IP modernes et collaboratifs.',
    items: [
      'Installation d\'autocommutateurs (IPBX)',
      'Solutions VoIP & SIP Trunking',
      'Visioconférence & Collaboration',
      'Intégration CRM / Téléphonie'
    ]
  },
  {
    id: 'maintenance',
    title: 'Maintenance & Support',
    icon: <MaintenanceIcon />,
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop',
    description: 'Un accompagnement technique réactif pour assurer la continuité de vos opérations 24/7.',
    items: [
      'Contrats de maintenance préventive',
      'Support technique à distance & sur site',
      'Audit & Conseil en performance',
      'Gestion de parc informatique'
    ]
  }
];

const STATS = [
  { value: 6, suffix: '+', label: 'Années d\'expertise' },
  { value: 20, suffix: '+', label: 'Projets réalisés' },
  { value: 20, suffix: '+', label: 'Clients actifs' },
  { value: 100, suffix: '%', label: 'Satisfaction client' },
];

export default function ServicesPage() {
  const theme = useTheme();

  return (
    <Box sx={{ bgcolor: 'background.default' }}>

      {/* ══ HERO ══════════════════════════════════════════════════ */}
      <Box
        sx={{
          color: 'white',
          pt: { xs: '80px', md: '100px' },
          pb: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
          backgroundImage: 'linear-gradient(135deg, rgba(30, 10, 60, 0.82) 0%, rgba(58, 30, 91, 0.70) 60%, rgba(20, 5, 40, 0.85) 100%), url(https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Orbes lumineux décoratifs */}
        <Box sx={{ position: 'absolute', top: -100, right: -100, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(141,108,171,0.25) 0%, transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }} />
        <Box sx={{ position: 'absolute', bottom: -80, left: -80, width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(93,52,139,0.3) 0%, transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }} />

        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} lg={8}>

              <FadeInDown delay={0.1}>
                <Box sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box sx={{ width: 40, height: 2, bgcolor: 'primary.light' }} />
                  <Typography variant="overline" sx={{ fontWeight: 700, letterSpacing: 3, color: 'primary.light', fontSize: '0.7rem' }}>
                    NOTRE EXPERTISE
                  </Typography>
                </Box>
              </FadeInDown>

              <Box sx={{ mt: 1, mb: 4, fontSize: { xs: '1.5rem', md: '1.9rem', lg: '2.2rem' }, fontWeight: 800, lineHeight: 1.22, color: 'white', letterSpacing: '-0.01em' }}>
                <WordStagger
                  text="Excellence en Infrastructure & Sécurité Opérationnelle."
                  delay={0.2}
                />
              </Box>
              <FadeInUp delay={0.7}>
                <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.75)', mb: 5, maxWidth: '600px', fontWeight: 400, lineHeight: 1.8 }}>
                  Audit, installation et maintenance d'infrastructures informatiques critiques pour sécuriser et pérenniser votre activité au Gabon et en Afrique centrale.
                </Typography>
              </FadeInUp>

              <FadeInUp delay={0.9}>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <AnimatedButton>
                    <Button
                      variant="contained"
                      size="large"
                      sx={{ bgcolor: 'primary.main', '&:hover': { bgcolor: 'primary.light' }, px: 4, borderRadius: 2, fontWeight: 700 }}
                      href="/contact"
                    >
                      Discuter de vos besoins
                    </Button>
                  </AnimatedButton>
                  <AnimatedButton>
                    <Button
                      variant="outlined"
                      size="large"
                      sx={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)', '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.07)' }, px: 4, borderRadius: 2 }}
                      href="/projets"
                    >
                      Voir nos réalisations
                    </Button>
                  </AnimatedButton>
                </Box>
              </FadeInUp>
            </Grid>
          </Grid>

          {/* KPI Stats */}
          <StaggerContainer delay={1.1} staggerDelay={0.12}>
            <Grid container spacing={3} sx={{ mt: 8, pt: 6, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              {STATS.map((stat) => (
                <Grid item xs={6} md={3} key={stat.label}>
                  <StaggerItem>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h3" sx={{ fontWeight: 800, color: 'primary.light', mb: 0.5 }}>
                        <CountUp to={stat.value} suffix={stat.suffix} />
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                        {stat.label}
                      </Typography>
                    </Box>
                  </StaggerItem>
                </Grid>
              ))}
            </Grid>
          </StaggerContainer>
        </Container>
      </Box>

      {/* ══ MAIN CONTENT ══════════════════════════════════════════ */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Grid container spacing={8} alignItems="flex-start">

          {/* ── Sidebar ──────────────────────────────────────── */}
          <Grid item xs={12} lg={3} sx={{ position: 'sticky', top: '80px', alignSelf: 'flex-start', display: { xs: 'none', lg: 'block' } }}>
            <FadeInLeft>
              <Box>
                <Typography variant="overline" sx={{ color: 'text.disabled', fontWeight: 700, mb: 2, display: 'block', letterSpacing: 2 }}>
                  PILIERS DE SERVICES
                </Typography>
                <List sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {SERVICES_PILLARS.map((service, i) => (
                    <HoverLift key={service.id} y={-3} scale={1.01}>
                      <ListItem
                        component="a"
                        href={`#${service.id}`}
                        disablePadding
                        sx={{
                          borderRadius: 2, overflow: 'hidden', mb: 0.5,
                          border: '1px solid', borderColor: 'divider',
                          '&:hover': { borderColor: 'primary.main', bgcolor: alpha(theme.palette.primary.main, 0.04) }
                        }}
                      >
                        <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', color: 'text.primary', textDecoration: 'none' }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            {React.cloneElement(service.icon, { sx: { fontSize: 20, color: 'primary.main' } })}
                            <Typography variant="body2" sx={{ fontWeight: 600 }}>
                              {service.title}
                            </Typography>
                          </Box>
                          <ArrowIcon sx={{ fontSize: 16, opacity: 0.4 }} />
                        </Box>
                      </ListItem>
                    </HoverLift>
                  ))}
                </List>

                <ScaleIn delay={0.3}>
                  <Paper
                    elevation={0}
                    sx={{ mt: 6, p: 3, borderRadius: 2, bgcolor: 'secondary.main', color: 'white', backgroundImage: 'linear-gradient(135deg, rgba(93,52,139,0.3) 0%, transparent 100%)' }}
                  >
                    <SupportIcon sx={{ fontSize: 40, color: 'primary.light', mb: 2 }} />
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                      Besoin d'un conseil ?
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', mb: 3 }}>
                      Nos experts vous accompagnent pour définir la solution adaptée à votre budget.
                    </Typography>
                    <AnimatedButton>
                      <Button fullWidth variant="contained" size="small"
                        sx={{ bgcolor: 'white', color: 'primary.dark', borderRadius: 2, fontWeight: 700, '&:hover': { bgcolor: 'primary.light', color: 'white' } }}
                        href="/contact"
                      >
                        Contactez-nous
                      </Button>
                    </AnimatedButton>
                  </Paper>
                </ScaleIn>
              </Box>
            </FadeInLeft>
          </Grid>

          {/* ── Sections services ────────────────────────────── */}
          <Grid item xs={12} lg={9}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {SERVICES_PILLARS.map((service, index) => (
                <Box key={service.id} id={service.id} sx={{ scrollMarginTop: '100px' }}>

                  {/* En-tête de section */}
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 5, flexWrap: 'wrap', gap: 2 }}>
                    <Box sx={{ flex: 1 }}>
                      <FadeInUp delay={0.05}>
                        <Box sx={{ display: 'inline-flex', px: 2, py: 0.5, borderRadius: '20px', bgcolor: alpha(theme.palette.primary.main, 0.1), color: 'primary.main', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.5, mb: 2 }}>
                          Expertise
                        </Box>
                      </FadeInUp>
                      <FadeInUp delay={0.1}>
                        <Typography variant="h3" sx={{ fontWeight: 700, mb: 2, fontSize: { xs: '1.8rem', md: '2.2rem' } }}>
                          {service.title}
                        </Typography>
                      </FadeInUp>
                      <FadeInUp delay={0.15}>
                        <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: '600px', lineHeight: 1.8 }}>
                          {service.description}
                        </Typography>
                      </FadeInUp>
                    </Box>

                  </Box>

                  {/* Contenu : Carte + Image */}
                  <Grid container spacing={3} alignItems="stretch">
                    <Grid item xs={12} md={6}>
                      <HoverLift>
                        <Paper
                          elevation={0}
                          sx={{ p: 4, borderRadius: 2, border: '1px solid', borderColor: 'divider', height: '100%', transition: 'border-color 0.3s' }}
                        >
                            <Box sx={{ width: 52, height: 52, borderRadius: 2, bgcolor: alpha(theme.palette.primary.main, 0.1), display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'primary.main', mb: 3 }}>
                              {service.icon}
                            </Box>
                          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                            Service Clé en Main
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.7 }}>
                            Nous gérons l'intégralité du cycle de vie de votre projet, de l'étude de besoins à la maintenance longue durée.
                          </Typography>
                          <StaggerContainer staggerDelay={0.08}>
                            <List dense>
                              {service.items.map((item, idx) => (
                                <StaggerItem key={idx}>
                                  <ListItem sx={{ px: 0 }}>
                                    <ListItemIcon sx={{ minWidth: 28 }}>
                                      <CheckIcon sx={{ fontSize: 18, color: 'success.main' }} />
                                    </ListItemIcon>
                                    <ListItemText primary={item} primaryTypographyProps={{ variant: 'body2', fontWeight: 500 }} />
                                  </ListItem>
                                </StaggerItem>
                              ))}
                            </List>
                          </StaggerContainer>
                        </Paper>
                      </HoverLift>
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <ScaleIn delay={0.1}>
                        <Box sx={{ height: '100%', minHeight: '280px', borderRadius: 2, overflow: 'hidden', position: 'relative' }}>
                          <Box
                            component="img"
                            src={service.image}
                            alt={service.title}
                            sx={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease', '&:hover': { transform: 'scale(1.04)' } }}
                          />
                          <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 60%)' }} />
                          <Box sx={{ position: 'absolute', bottom: 20, left: 20, right: 20, color: 'white' }}>
                            <Typography variant="caption" sx={{ textTransform: 'uppercase', fontWeight: 700, letterSpacing: 1.5, opacity: 0.8 }}>
                              Réalisation
                            </Typography>
                            <Typography variant="subtitle1" sx={{ fontWeight: 700, mt: 0.3 }}>
                              Projet récent à Libreville
                            </Typography>
                          </Box>
                        </Box>
                      </ScaleIn>
                    </Grid>
                  </Grid>

                  {service.id !== 'maintenance' && (
                    <FadeIn delay={0.3}>
                      <Divider sx={{ mt: 10, borderColor: alpha(theme.palette.divider, 0.5) }} />
                    </FadeIn>
                  )}
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* ══ CTA FINAL ══════════════════════════════════════════════ */}
      <Box sx={{ bgcolor: 'primary.dark', py: 14, position: 'relative', overflow: 'hidden' }}>
        {/* Orbe */}
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(141,108,171,0.2) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} />

        <Container maxWidth="sm" sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <FadeInUp>
            <Typography variant="h3" sx={{ fontWeight: 800, mb: 3, color: 'white' }}>
              Prêt à sécuriser votre infrastructure ?
            </Typography>
          </FadeInUp>
          <FadeInUp delay={0.15}>
            <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)', mb: 6, lineHeight: 1.8 }}>
              Obtenez un audit gratuit ou un devis personnalisé. Notre équipe vous répond en moins de 4h ouvrées.
            </Typography>
          </FadeInUp>
          <StaggerContainer staggerDelay={0.15}>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <StaggerItem>
                <AnimatedButton>
                  <Button variant="contained" size="large"
                    sx={{ bgcolor: 'white', color: 'primary.dark', borderRadius: 2, px: 5, fontWeight: 700, '&:hover': { bgcolor: 'primary.light', color: 'white' } }}
                    href="/contact"
                  >
                    Demander un devis
                  </Button>
                </AnimatedButton>
              </StaggerItem>
              <StaggerItem>
                <AnimatedButton>
                  <Button variant="outlined" size="large"
                    sx={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)', borderRadius: 2, px: 5, '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.07)' } }}
                    href="/contact"
                  >
                    Planifier un Expert
                  </Button>
                </AnimatedButton>
              </StaggerItem>
            </Box>
          </StaggerContainer>
        </Container>
      </Box>
    </Box>
  );
}
