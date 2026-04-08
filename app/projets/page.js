"use client";

import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Stack, Chip } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ProjectCard from '../../components/ProjectCard';
import {
  FadeInUp, FadeInDown, StaggerContainer, StaggerItem,
  HoverLift, WordStagger,
} from '../../components/animations';

const PROJECTS_DATA = [
  { id: 2, title: "Vidéosurveillance IP Haute Résolution", category: "Sécurité", description: "Déploiement de 24 caméras IP avec accès à distance sécurisé et stockage redondant pour une résidence privée de haut standing.", image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2030&auto=format&fit=crop", location: "Bas de Guegue, Libreville", year: "2024" },
  { id: 4, title: "Contrôle d'Accès Biométrique", category: "Sécurité", description: "Mise en place d'un système de contrôle d'accès par empreintes digitales et badges pour sécuriser les zones sensibles d'un siège social.", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop", location: "Zone Industrielle Oloumi", year: "2023" },
  { id: 5, title: "WiFi Haute Densité pour Hôtel", category: "Réseau", description: "Configuration de points d'accès WiFi 6 pour une couverture optimale dans tout le complexe hôtelier, incluant portail captif.", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop", location: "Pointe-Denis, Gabon", year: "2024" },
  { id: 6, title: "Maintenance & Support Critique", category: "Services", description: "Contrat annuel de maintenance préventive et curative pour garantir la disponibilité 24/7 des équipements réseau.", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop", location: "Atong-Abe, Libreville", year: "2024" },
];

const CATEGORIES = ["Tous", "Réseau", "Sécurité", "Téléphonie", "Services"];

export default function ProjetsPage() {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const filteredProjects = PROJECTS_DATA.filter(p => activeCategory === "Tous" || p.category === activeCategory);

  return (
    <Box sx={{ pb: 15 }}>
      {/* ══ HERO ════════════════════════════════════════════ */}
      <Box sx={{
        pt: 0, pb: 10, bgcolor: '#f8f6f6',
        backgroundImage: 'linear-gradient(to right, rgba(93,52,139,0.95) 0%, rgba(93,52,139,0.8) 50%, rgba(93,52,139,0.4) 100%), url(https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop)',
        backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', color: 'white'
      }}>
        <Container maxWidth="lg" sx={{ pt: { xs: 15, md: 25 } }}>
          <Box sx={{ maxWidth: 800 }}>
            <FadeInDown delay={0.1}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                <Box sx={{ width: 40, height: 2, bgcolor: 'rgba(255,255,255,0.7)' }} />
                <Typography variant="overline" sx={{ fontWeight: 700, letterSpacing: 3, opacity: 0.8, fontSize: '0.7rem' }}>
                  NOS RÉALISATIONS
                </Typography>
              </Box>
            </FadeInDown>
            <Box sx={{ mb: 4, fontSize: { xs: '2.6rem', md: '3.2rem', lg: '3.8rem' }, fontWeight: 800, lineHeight: 1.1, color: 'white', letterSpacing: '-0.02em' }}>
              <WordStagger text="Nos Réalisations" delay={0.2} />
            </Box>
            <FadeInUp delay={0.7}>
              <Typography variant="h6" sx={{ opacity: 0.85, fontWeight: 400, maxWidth: 600, lineHeight: 1.8 }}>
                Découvrez comment nous accompagnons nos clients dans la modernisation et la sécurisation de leurs infrastructures technologiques.
              </Typography>
            </FadeInUp>
          </Box>
        </Container>
      </Box>

      {/* ══ FILTER TOOLBAR ══════════════════════════════════ */}
      <Container maxWidth="lg" sx={{ mt: -5 }}>
        <FadeInUp delay={0.1}>
          <Box sx={{ p: 4, bgcolor: 'white', borderRadius: 2, boxShadow: '0 10px 40px rgba(0,0,0,0.1)', border: '1px solid rgba(0,0,0,0.05)' }}>
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems="center" justifyContent="center">
              <Stack direction="row" spacing={1} sx={{ overflowX: 'auto', width: { xs: '100%', md: 'auto' }, pb: { xs: 1, md: 0 } }}>
                {CATEGORIES.map((cat) => (
                  <HoverLift key={cat} y={-2} scale={1.04}>
                    <Chip
                      label={cat}
                      onClick={() => setActiveCategory(cat)}
                      sx={{
                        borderRadius: 1, fontWeight: 700, px: 1,
                        bgcolor: activeCategory === cat ? 'primary.main' : 'rgba(0,0,0,0.04)',
                        color: activeCategory === cat ? 'white' : 'text.primary',
                        '&:hover': { bgcolor: activeCategory === cat ? 'primary.dark' : 'rgba(0,0,0,0.08)' }
                      }}
                    />
                  </HoverLift>
                ))}
              </Stack>
            </Stack>
          </Box>
        </FadeInUp>
      </Container>

      {/* ══ PROJECTS GRID ═══════════════════════════════════ */}
      <Container maxWidth="lg" sx={{ mt: 8 }}>
        <FadeInUp delay={0.05}>
          <Typography variant="h5" sx={{ fontWeight: 800, mb: 4 }}>
            {activeCategory === "Tous" ? "Tous les projets" : `Projets ${activeCategory}`}
            <Typography component="span" sx={{ ml: 2, color: 'text.disabled', fontWeight: 500 }}>
              ({filteredProjects.length})
            </Typography>
          </Typography>
        </FadeInUp>

        {filteredProjects.length > 0 ? (
          <StaggerContainer staggerDelay={0.1}>
            <Grid container spacing={4}>
              {filteredProjects.map((project) => (
                <Grid item xs={12} sm={6} md={4} key={project.id}>
                  <StaggerItem>
                    <HoverLift>
                      <ProjectCard {...project} />
                    </HoverLift>
                  </StaggerItem>
                </Grid>
              ))}
            </Grid>
          </StaggerContainer>
        ) : (
          <FadeInUp>
            <Box sx={{ textAlign: 'center', py: 10, bgcolor: '#f8f9fa', borderRadius: 2, border: '2px dashed #e2e8f0' }}>
              <Typography variant="h6" color="text.secondary">
                Aucun projet ne correspond à votre recherche.
              </Typography>
            </Box>
          </FadeInUp>
        )}
      </Container>
    </Box>
  );
}
