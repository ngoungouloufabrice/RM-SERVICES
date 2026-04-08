"use client";

import React, { useState } from 'react';
import {
  Box, Container, Typography, Grid, Stack, Button, Card, Avatar,
} from '@mui/material';
import Link from 'next/link';
import ValueCard from '../../components/ValueCard';
import ExpertCard from '../../components/ExpertCard';
import CertificationCard from '../../components/CertificationCard';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VerifiedIcon from '@mui/icons-material/Verified';
import SecurityIcon from '@mui/icons-material/Security';
import BuildIcon from '@mui/icons-material/Build';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import RouterIcon from '@mui/icons-material/Router';
import VideocamIcon from '@mui/icons-material/Videocam';
import PhoneIcon from '@mui/icons-material/Phone';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import {
  FadeIn, FadeInUp, FadeInLeft, FadeInRight, FadeInDown,
  ScaleIn, StaggerContainer, StaggerItem, WordStagger,
  HoverLift, AnimatedButton, IconPulse,
} from '../../components/animations';

const experts = [
  { name: "Jean Mavoungou", role: "Ingénieur Réseau & Télécom", img: <PersonIcon /> },
  { name: "Kevin N'Dongo", role: "Technicien Installation & Câblage", img: <PersonIcon /> },
  { name: "Patrick Essono", role: "Responsable Systèmes & Infrastructure", img: <PersonIcon /> },
  { name: "Sarah Ndzié", role: "Spécialiste Vidéosurveillance & Sécurité", img: <PersonIcon /> },
  { name: "Linda Obiang", role: "Chargée Support Client & Maintenance", img: <PersonIcon /> },
  { name: "Arnaud Biyoghe", role: "Expert Contrôle d'Accès & Alarmes", img: <PersonIcon /> },
];

const HISTORY_TIMELINE = [
  { year: "2018", title: "Naissance de RM Services", desc: "Lancement à Libreville avec un focus sur l'infrastructure réseau et la maintenance informatique." },
  { year: "2020", title: "Expansion Sécurité", desc: "Déploiement de solutions majeures en vidéosurveillance IP et contrôle d'accès pour les entreprises locales." },
  { year: "2024", title: "Expertise Communication", desc: "Consolidation de notre offre en téléphonie IP et solutions de communication unifiée à travers le Gabon." },
];

const MISSION_POINTS = [
  "Installation rapide et conforme aux normes",
  "Sécurisation des équipements et des accès",
  "Support technique et maintenance continue",
];

const VALUES_DATA = [
  { icon: <VerifiedIcon />, title: "Fiabilité", desc: "Nous garantissons des installations solides, durables et conformes aux normes professionnelles." },
  { icon: <SecurityIcon />, title: "Sécurité", desc: "La protection de vos infrastructures et de vos données est au cœur de toutes nos interventions." },
  { icon: <BuildIcon />, title: "Expertise Technique", desc: "Une maîtrise complète des réseaux, systèmes de sécurité et équipements connectés." },
  { icon: <SupportAgentIcon />, title: "Proximité & Support", desc: "Un accompagnement réactif avec un support technique disponible et à l'écoute de vos besoins." },
];

export default function AproposPage() {
  return (
    <Box>
      {/* ══ HERO ════════════════════════════════════════════════ */}
      <Box sx={{
        pt: 0, pb: 10, bgcolor: '#f8f6f6',
        backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0.4) 100%), url(https://images.openai.com/static-rsc-4/kdfEWyzmOE108Bi8i-y3fGvj4Q65YrzSXgxdrRzI_b1EfT3ZLrUtF8uaSIC_aIzXYmn0-NR4B4myrSdyfXk91-vUDpn9gIEh-pnftIcpT3BHPMgn4qu91HWd9tpcEbgDBgyaDRo2wdiZvRTYHzazQvACM51ZcJ9jIe78BFsci655I3ULzb73s42u9r-1eBJp?purpose=fullsize)',
        backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'
      }}>
        <Container maxWidth="lg" sx={{ pt: { xs: 12, md: 20 } }}>
          <Box sx={{ maxWidth: 800 }}>
            <FadeInDown delay={0.1}>
              <Box sx={{ display: 'inline-flex', alignItems: 'center', px: 2, py: 0.5, borderRadius: 2, border: '1px solid rgba(93,52,139,0.2)', bgcolor: 'rgba(93,52,139,0.1)', color: 'primary.main', mb: 4 }}>
                <Typography variant="caption" sx={{ fontWeight: 700 }}>★ Qui sommes-nous ?</Typography>
              </Box>
            </FadeInDown>

            <Box sx={{ mb: 4, fontSize: { xs: '1.9rem', md: '2.4rem', lg: '3rem' }, fontWeight: 800, lineHeight: 1.18, color: '#1e293b', letterSpacing: '-0.02em' }}>
              <WordStagger text="Experts en réseau, sécurité et infrastructures" delay={0.2} />
            </Box>

            <FadeInUp delay={0.7}>
              <Typography variant="h6" sx={{ color: 'text.secondary', fontWeight: 500, lineHeight: 1.7, mt: 2 }}>
                Conception, installation et maintenance de solutions réseau, sécurité et systèmes connectés.
              </Typography>
            </FadeInUp>
          </Box>
        </Container>
      </Box>

      {/* ══ HISTORY ═════════════════════════════════════════════ */}
      <Box sx={{ py: 12, bgcolor: 'white' }}>
        <Container maxWidth="lg">
          <Grid container spacing={10} alignItems="center">
            <Grid item xs={12} md={6}>
              <FadeInLeft>
                <Typography variant="h3" sx={{ mb: 4, fontWeight: 700 }}>Notre Histoire</Typography>
                <Stack spacing={3}>
                  <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.8 }}>
                    Fondée à Libreville, RM Services est née de la volonté d'offrir aux entreprises et particuliers une expertise de pointe en infrastructure réseau et systèmes de sécurité connectés.
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.8 }}>
                    Au fil des années, nous avons bâti une réputation solide basée sur la fiabilité de nos installations et notre capacité à intégrer les technologies de communication les plus modernes.
                  </Typography>
                  <HoverLift y={-4} scale={1.01}>
                    <Box sx={{ borderLeft: '4px solid #5D348B', pl: 3, py: 1, fontStyle: 'italic' }}>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        "Protéger, connecter et accompagner : nous transformons vos besoins techniques en solutions durables."
                      </Typography>
                    </Box>
                  </HoverLift>
                </Stack>
              </FadeInLeft>
            </Grid>
            <Grid item xs={12} md={6}>
              <FadeInRight delay={0.2}>
                <Card sx={{ p: 4, borderRadius: 2, boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                  <Typography variant="h6" sx={{ mb: 4, display: 'flex', alignItems: 'center', gap: 2 }}>
                    <IconPulse><HistoryEduIcon color="primary" /></IconPulse> Dates Clés
                  </Typography>
                  <StaggerContainer staggerDelay={0.15}>
                    <Stack spacing={4} sx={{ position: 'relative', pl: 4, borderLeft: '2px solid #e2e8f0' }}>
                      {HISTORY_TIMELINE.map((item, i) => (
                        <Box key={i} sx={{ position: 'relative' }}>
                          <StaggerItem>
                            <Box sx={{ position: 'absolute', left: -41, top: 4, width: 16, height: 16, bgcolor: i === 0 ? 'primary.main' : '#cbd5e1', borderRadius: '50%', border: '4px solid white' }} />
                            <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 800 }}>{item.year}</Typography>
                            <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>{item.title}</Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>{item.desc}</Typography>
                          </StaggerItem>
                        </Box>
                      ))}
                    </Stack>
                  </StaggerContainer>
                </Card>
              </FadeInRight>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ══ MISSION & VISION ════════════════════════════════════ */}
      <Box sx={{ py: 12, bgcolor: 'white', position: 'relative', overflow: 'hidden' }}>
        <Container maxWidth="lg">
          <Grid container spacing={8}>
            <Grid item xs={12} md={6}>
              <FadeInLeft>
                <Stack spacing={3}>
                    <Avatar sx={{ bgcolor: 'rgba(93,52,139,0.2)', width: 64, height: 64, border: '1px solid rgba(93,52,139,0.3)', borderRadius: '50%' }}>
                      <TrackChangesIcon sx={{ fontSize: 32, color: '#FFFFFF' }} />
                    </Avatar>
                  <Typography variant="h4" sx={{ fontWeight: 700 }}>Notre Mission</Typography>
                  <Typography sx={{ opacity: 0.8, fontSize: '1.1rem', lineHeight: 1.7 }}>
                    Concevoir, installer et maintenir des solutions technologiques performantes : réseaux informatiques, systèmes de vidéosurveillance, téléphonie IP, alarmes et contrôle d'accès, afin d'assurer la sécurité et la fiabilité des infrastructures de nos clients.
                  </Typography>
                  <StaggerContainer staggerDelay={0.1}>
                    <Stack spacing={1.5}>
                      {MISSION_POINTS.map((text, i) => (
                        <StaggerItem key={i}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <VerifiedIcon sx={{ fontSize: 18, color: 'primary.light' }} />
                            <Typography variant="body2" sx={{ opacity: 0.7 }}>{text}</Typography>
                          </Box>
                        </StaggerItem>
                      ))}
                    </Stack>
                  </StaggerContainer>
                </Stack>
              </FadeInLeft>
            </Grid>

            <Grid item xs={12} md={6}>
              <FadeInRight delay={0.15}>
                <Stack spacing={3}>
                    <Avatar sx={{ bgcolor: 'white', width: 64, height: 64, border: '1px solid rgba(0,0,0,0.05)', borderRadius: '50%' }}>
                      <VisibilityIcon sx={{ fontSize: 32, color: 'primary.main' }} />
                    </Avatar>
                  <Typography variant="h4" sx={{ fontWeight: 700 }}>Notre Vision</Typography>
                  <Typography sx={{ opacity: 0.8, fontSize: '1.1rem', lineHeight: 1.7 }}>
                    Devenir une référence dans les solutions réseau et sécurité, en offrant des services innovants, fiables et accessibles, adaptés aux besoins des entreprises et particuliers.
                  </Typography>
                  <HoverLift y={-4} scale={1.01}>
                    <Box sx={{ p: 4, bgcolor: 'white', borderRadius: 2, borderLeft: '4px solid #5D348B', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                      <Typography variant="body1" sx={{ fontStyle: 'italic', color: 'text.secondary' }}>
                        "Des solutions simples, efficaces et sécurisées pour connecter et protéger vos infrastructures."
                      </Typography>
                    </Box>
                  </HoverLift>
                </Stack>
              </FadeInRight>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ══ VALUES ══════════════════════════════════════════════ */}
      <Box sx={{ py: 12, bgcolor: 'white' }}>
        <Container maxWidth="lg">
          <FadeInUp>
            <Box sx={{ textAlign: 'center', mb: 10 }}>
              <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 800, textTransform: 'uppercase', letterSpacing: 2 }}>
                Nos principes directeurs
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 800, mt: 1 }}>Les valeurs qui nous définissent</Typography>
            </Box>
          </FadeInUp>

          <StaggerContainer staggerDelay={0.1}>
            <Grid container spacing={4}>
              {VALUES_DATA.map((value, i) => (
                <Grid item xs={12} sm={6} md={3} key={i}>
                  <StaggerItem>
                    <HoverLift>
                      <ValueCard {...value} />
                    </HoverLift>
                  </StaggerItem>
                </Grid>
              ))}
            </Grid>
          </StaggerContainer>
        </Container>
      </Box>

      {/* ══ TEAM ════════════════════════════════════════════════ */}
      <Box sx={{ py: 12, bgcolor: 'white' }}>
        <Container maxWidth="lg">
          <FadeInUp>
            <Box sx={{ mb: 6 }}>
              <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>Nos Experts</Typography>
              <Typography color="text.secondary">
                Une équipe de professionnels passionnés, experts en installation réseau et sécurité.
              </Typography>
            </Box>
          </FadeInUp>
          <StaggerContainer staggerDelay={0.09}>
            <Grid container spacing={4}>
              {experts.map((expert, i) => (
                <Grid item xs={12} sm={6} md={4} key={i}>
                  <StaggerItem>
                    <HoverLift>
                      <ExpertCard {...expert} />
                    </HoverLift>
                  </StaggerItem>
                </Grid>
              ))}
            </Grid>
          </StaggerContainer>
        </Container>
      </Box>

      {/* ══ CTA ═════════════════════════════════════════════════ */}
      <Box sx={{ py: 12, bgcolor: 'primary.dark', color: 'white', textAlign: 'center' }}>
        <Container maxWidth="md">
          <FadeInUp>
            <Typography variant="h3" sx={{ fontWeight: 800, mb: 4 }}>Prêt à moderniser votre infrastructure ?</Typography>
          </FadeInUp>
          <FadeInUp delay={0.15}>
            <Typography sx={{ opacity: 0.8, mb: 6, fontSize: '1.2rem' }}>
              Contactez nos experts pour une analyse personnalisée de vos besoins en réseau et sécurité.
            </Typography>
          </FadeInUp>
          <FadeInUp delay={0.25}>
            <AnimatedButton>
              <Link href="/contact" passHref style={{ textDecoration: 'none' }}>
                <Button variant="contained" size="large" sx={{ bgcolor: 'white', color: 'primary.dark', px: 6, py: 2, fontWeight: 800, borderRadius: 2, '&:hover': { bgcolor: 'primary.light', color: 'white' } }}>
                  Demander une consultation
                </Button>
              </Link>
            </AnimatedButton>
          </FadeInUp>
        </Container>
      </Box>
    </Box>
  );
}
