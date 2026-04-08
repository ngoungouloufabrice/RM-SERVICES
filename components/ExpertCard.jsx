"use client";

import React from 'react';
import {
  Box,
  Avatar,
  Typography,
} from '@mui/material';

export default function ExpertCard({ name, role, img }) {
  return (
    <Box sx={{ 
      textAlign: 'center', 
      p: 4, 
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      bgcolor: 'transparent'
    }}>
      <Avatar 
        src={img} 
        sx={{ 
          width: 180, 
          height: 180, 
          mx: 'auto', 
          mb: 4, 
          border: '8px solid white', 
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)' 
        }} 
      />
      <Typography 
        variant="h5" 
        sx={{ 
          fontWeight: 800, 
          color: 'secondary.main',
          mb: 1
        }}
      >
        {name}
      </Typography>
      <Typography 
        variant="body1" 
        sx={{ 
          fontWeight: 600, 
          color: 'primary.main',
          fontSize: '1.1rem'
        }}
      >
        {role}
      </Typography>
    </Box>
  );
}
