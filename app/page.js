"use client";

import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Stack,
} from '@mui/material';
import Link from 'next/link';
import ServiceCard from '../components/ServiceCard';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import RouterIcon from '@mui/icons-material/Router';
import VideocamIcon from '@mui/icons-material/Videocam';
import PhoneIcon from '@mui/icons-material/Phone';
import SecurityIcon from '@mui/icons-material/Security';
import LockIcon from '@mui/icons-material/Lock';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import {
  FadeIn,
  FadeInUp,
  FadeInLeft,
  FadeInRight,
  FadeInDown,
  StaggerContainer,
  StaggerItem,
  WordStagger,
  HoverLift,
  AnimatedButton,
  CountUp,
} from '../components/animations';

const services = [
  { title: "Câblage & Infrastructure Réseau", desc: "Installation de câblage structuré (RJ45, fibre optique), baies de brassage et organisation complète de l'infrastructure réseau.", icon: <SettingsEthernetIcon sx={{ fontSize: 40 }} /> },
  { title: "Installation & Configuration Réseau", desc: "Déploiement et configuration de routeurs, switchs, points d'accès Wi-Fi et optimisation des performances réseau.", icon: <RouterIcon sx={{ fontSize: 40 }} /> },
  { title: "Vidéosurveillance", desc: "Installation et configuration de systèmes de caméras (CCTV/IP), enregistrement, accès à distance et sécurisation des flux vidéo.", icon: <VideocamIcon sx={{ fontSize: 40 }} /> },
  { title: "Téléphonie & Communication", desc: "Mise en place de solutions de téléphonie IP (VoIP), standards téléphoniques et intégration avec les systèmes existants.", icon: <PhoneIcon sx={{ fontSize: 40 }} /> },
  { title: "Systèmes d'Alarme", desc: "Installation et paramétrage de systèmes d'alarme anti-intrusion avec détection intelligente et alertes en temps réel.", icon: <SecurityIcon sx={{ fontSize: 40 }} /> },
  { title: "Contrôle d'Accès", desc: "Déploiement de solutions de contrôle d'accès (badges, biométrie, digicode) pour sécuriser les accès physiques.", icon: <LockIcon sx={{ fontSize: 40 }} /> },
  { title: "Maintenance & Support Technique", desc: "Maintenance préventive et corrective, assistance technique et supervision des systèmes installés.", icon: <SupportAgentIcon sx={{ fontSize: 40 }} /> },
];

export default function EsicTechPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    "https://images.openai.com/static-rsc-4/J9KuCbG1qsK-YxD_snpyGwttthpps6y9W5R9u-O6Sjr6eQRvdTNllZs2CA7iRYwhClVnnSnzhA1B76zyl9WhX3AQF2ch3uXph20f2B7Kl2M7Yxll327_cuT46U_Sg3ggDPh468SsSxbvrWm-18d7oyolTfkW5O_2AWt3ALDs79bp1rsUTefhhM0Rz8hhQIYP?purpose=fullsize",
    "https://images.openai.com/static-rsc-4/KXz4qoHAdyRuiTchwb3ckHXwkyAT7rKs_VJ5GgCb_-eQNfqvdXqVnC8V7VuE5j2R50lU5qfs1AUYWIUJ56i2tiUMUjbrC71YllcQmub6Wt6SSvB-wDbAqd8g3FJe3mhwWZUjsMEj7qtgdeohkjI9SFVrzvPsiThGIp4IM3Cvh81Mgdx0WW30SC9LpOb0HVg_?purpose=fullsize"
  ];

  useEffect(() => {
    const timer = setInterval(() => setActiveSlide((prev) => (prev + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* ══ HERO ══════════════════════════════════════════ */}
      <Box sx={{ position: 'relative', pt: 0, height: { xs: 'auto', md: '100vh' }, minHeight: 600, overflow: 'hidden' }}>
        {slides.map((slide, index) => (
          <Box key={slide} sx={{ position: 'absolute', inset: 0, zIndex: 0, opacity: activeSlide === index ? 1 : 0, transition: 'opacity 1.2s ease-in-out', backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.72) 50%, rgba(255,255,255,0.1) 100%), url(${slide})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        ))}

        <Container sx={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', alignItems: 'center', pt: { xs: 12, md: 0 } }}>
          <Box sx={{ maxWidth: 700, py: { xs: 10, md: 0 } }}>

            <FadeInDown delay={0.1}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                <Box sx={{ width: 40, height: 2, bgcolor: 'primary.main' }} />
                <Typography variant="overline" sx={{ fontWeight: 700, letterSpacing: 3, color: 'primary.main', fontSize: '0.7rem' }}>
                  RM SERVICES
                </Typography>
              </Box>
            </FadeInDown>

            <Box sx={{ mb: 4, fontSize: { xs: '1.4rem', md: '1.75rem', lg: '2.1rem' }, fontWeight: 800, lineHeight: 1.22, color: 'secondary.main', letterSpacing: '-0.01em' }}>
              <WordStagger
                text="SOLUTIONS PROFESSIONNELLES EN RÉSEAU, SÉCURITÉ ET COMMUNICATION"
                delay={0.2}
              />
            </Box>

            <FadeInUp delay={0.8}>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 5, fontSize: '1.125rem', lineHeight: 1.8, maxWidth: 600 }}>
                Nous accompagnons les entreprises dans l'installation et la configuration
                de leurs infrastructures : câblage réseau, vidéosurveillance, téléphonie IP,
                systèmes d'alarme et contrôle d'accès.
              </Typography>
            </FadeInUp>

            <FadeInUp delay={1.0}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <AnimatedButton>
                  <Link href="/contact" passHref style={{ textDecoration: 'none' }}>
                    <Button variant="contained" color="secondary" sx={{ px: 4, borderRadius: 2, fontWeight: 700 }}>
                      Nous contacter
                    </Button>
                  </Link>
                </AnimatedButton>
                <AnimatedButton>
                  <Link href="/services" passHref style={{ textDecoration: 'none' }}>
                    <Button variant="outlined" color="inherit" sx={{ borderColor: 'divider', px: 4, borderRadius: 2 }}>
                      Nos services
                    </Button>
                  </Link>
                </AnimatedButton>
              </Stack>
            </FadeInUp>
          </Box>
        </Container>

        {/* Slide Indicators */}
        <Box sx={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 1 }}>
          {slides.map((_, index) => (
            <Box key={index} onClick={() => setActiveSlide(index)} sx={{ width: activeSlide === index ? 32 : 12, height: 12, borderRadius: 2, bgcolor: activeSlide === index ? 'primary.main' : 'rgba(0,0,0,0.2)', cursor: 'pointer', transition: 'all 0.3s ease' }} />
          ))}
        </Box>
      </Box>

      {/* ══ SERVICES ══════════════════════════════════════ */}
      <Box sx={{ py: 12, bgcolor: '#FFFFFF' }}>
        <Container maxWidth="lg">
          <FadeInUp>
            <Box textAlign="center" mb={10}>
              <Typography variant="subtitle2" color="secondary" sx={{ fontWeight: 600, mb: 1 }}>Nos services</Typography>
              <Typography variant="h2" sx={{ mb: 2 }}>Expertise technique éprouvée</Typography>
              <Typography color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
                Nous offrons une gamme complète de services pour optimiser et aligner vos objectifs stratégiques avec la technologie.
              </Typography>
            </Box>
          </FadeInUp>

          <StaggerContainer staggerDelay={0.08}>
            <Grid container spacing={4}>
              {services.map((service, i) => (
                <Grid item xs={12} sm={6} md={4} key={i}>
                  <StaggerItem>
                    <HoverLift>
                      <ServiceCard title={service.title} desc={service.desc} icon={service.icon} />
                    </HoverLift>
                  </StaggerItem>
                </Grid>
              ))}
            </Grid>
          </StaggerContainer>
        </Container>
      </Box>

      {/* ══ CTA BAND ══════════════════════════════════════ */}
      <Box sx={{ py: 10, bgcolor: 'primary.dark', color: 'white', textAlign: 'center' }}>
        <Container maxWidth="md">
          <FadeInUp>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>
              Prêt à moderniser votre infrastructure ?
            </Typography>
          </FadeInUp>
          <FadeInUp delay={0.15}>
            <Typography sx={{ opacity: 0.8, mb: 4 }}>
              Contactez-nous pour un audit gratuit et un devis personnalisé.
            </Typography>
          </FadeInUp>
          <FadeInUp delay={0.25}>
            <AnimatedButton>
              <Link href="/contact" passHref style={{ textDecoration: 'none' }}>
                <Button variant="contained" size="large" sx={{ bgcolor: 'white', color: 'primary.dark', px: 6, borderRadius: 2, fontWeight: 800, '&:hover': { bgcolor: 'primary.light', color: 'white' } }}>
                  Demander un devis
                </Button>
              </Link>
            </AnimatedButton>
          </FadeInUp>
        </Container>
      </Box>
    </>
  );
}
