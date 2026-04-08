"use client";

import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
  Stack,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

export default function ProjectCard({ title, category, description, image, location, year }) {
  return (
    <Card 
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'divider',
        boxShadow: 'none',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 12px 24px rgba(93, 52, 139, 0.1)',
          borderColor: 'primary.light',
        }
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          height="220"
          image={image || 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2000&auto=format&fit=crop'}
          alt={title}
          sx={{ objectFit: 'cover' }}
        />
        <Chip 
          label={category} 
          sx={{ 
            position: 'absolute', 
            top: 16, 
            right: 16, 
            bgcolor: 'primary.main', 
            color: 'white',
            fontWeight: 700,
            borderRadius: 1,
            fontSize: '0.75rem',
          }} 
        />
      </Box>
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 800, mb: 2, lineHeight: 1.2 }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3, minHeight: '3em' }}>
          {description}
        </Typography>
        
        <Stack spacing={1}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'text.disabled' }}>
            <LocationOnIcon sx={{ fontSize: 16 }} />
            <Typography variant="caption" sx={{ fontWeight: 600 }}>{location}</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'text.disabled' }}>
            <CalendarTodayIcon sx={{ fontSize: 16 }} />
            <Typography variant="caption" sx={{ fontWeight: 600 }}>{year}</Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}
