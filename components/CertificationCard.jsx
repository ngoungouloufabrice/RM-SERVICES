"use client";

import React from 'react';
import {
  Card,
  Avatar,
  Typography,
  Box,
} from '@mui/material';

export default function CertificationCard({ title, subtitle, desc, icon: IconComponent }) {
  return (
    <Card 
      variant="outlined" 
      sx={{ 
        p: 4, 
        height: '100%', 
        borderRadius: 2, 
        transition: '0.3s', 
        '&:hover': { 
          borderColor: 'primary.main', 
          bgcolor: 'rgba(93, 52, 139, 0.04)',
          transform: 'translateY(-5px)'
        } 
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Avatar sx={{ bgcolor: 'rgba(93, 52, 139, 0.1)', color: 'primary.main' }}>
          {IconComponent && <IconComponent />}
        </Avatar>
        <Box sx={{ width: 40, height: 40, bgcolor: '#f1f5f9', borderRadius: 2 }} />
      </Box>
      <Typography variant="h6" sx={{ fontWeight: 700 }}>{title}</Typography>
      <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 2 }}>{subtitle}</Typography>
      <Typography variant="body2" sx={{ opacity: 0.8 }}>{desc}</Typography>
    </Card>
  );
}
