"use client";

import React from 'react';
import {
  Card,
  Typography,
  CardContent,
  Button,
  Box,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function ValueCard({ icon, title, desc}) {
  return (
    <Card sx={{
      height: '100%',
      p: 4,
      display: 'flex',
      flexDirection: 'column',
      transition: 'transform 0.3s, box-shadow 0.3s',
      borderRadius: 2,
      border: '1px solid rgba(0,0,0,0.05)',
      '&:hover': {
        transform: 'translateY(-8px)',
        boxShadow: '0 20px 40px rgba(93, 52, 139, 0.12)',
        borderColor: 'primary.main'
      }
    }}>
      <Box sx={{
        bgcolor: 'primary.main',
        color: 'white',
        width: 64,
        height: 64,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mb: 3
      }}>
        {React.cloneElement(icon, { sx: { fontSize: 32 } })}
      </Box>
      <CardContent sx={{ p: 0, flexGrow: 1 }}>
        <Typography variant="h3" sx={{ fontSize: '1.25rem', mb: 2, fontWeight: 700 }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
          {desc}
        </Typography>
      </CardContent>
    </Card>
  );
}
