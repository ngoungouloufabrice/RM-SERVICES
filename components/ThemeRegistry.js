"use client";

import React from 'react';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';

// Thème EsicTech personnalisé
const theme = createTheme({
  palette: {
    primary: {
      main: '#5D348B', // Royal Purple
      light: '#8D6CAB', // Amethyst
      dark: '#3A1E5B', // Deep Indigo
    },
    secondary: {
      main: '#1A1A1A', // Charcoal Black
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
      section: '#FFFFFF', // Setting default section to white
    },
  },
  typography: {
    fontFamily: 'var(--font-inter), sans-serif',
    h1: {
      fontFamily: 'var(--font-space-grotesk), sans-serif',
      fontWeight: 800,
    },
    h2: {
      fontFamily: 'var(--font-space-grotesk), sans-serif',
      fontWeight: 700,
    },
    h3: {
      fontFamily: 'var(--font-space-grotesk), sans-serif',
      fontWeight: 700,
    },
  },
  shape: {
    borderRadius: 2,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          padding: '10px 24px',
        },
      },
    },
  },
});

export default function ThemeRegistry({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box 
        component="div" 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          minHeight: '100vh' 
        }}
      >
        {children}
      </Box>
    </ThemeProvider>
  );
}
