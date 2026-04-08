"use client";

import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';

export default function ImplantationCard({ name, address, rccm, email, tel, icon: IconComponent }) {
  return (
    <Card sx={{ height: '100%', overflow: 'hidden', borderRadius: 2, border: '1px solid rgba(0,0,0,0.05)' }}>
      <Box sx={{ 
        height: 200, 
        bgcolor: '#F3EFFF', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center' 
      }}>
        {IconComponent && <IconComponent sx={{ fontSize: 64, color: 'primary.main', opacity: 0.2 }} />}
      </Box>
      <CardContent sx={{ p: 4 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>{name}</Typography>
        <Typography variant="body2" sx={{ color: 'primary.main', fontWeight: 600, mb: 1 }}>{address}</Typography>
        {rccm && <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>{rccm}</Typography>}
        {tel && <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>Tél : {tel}</Typography>}
        <Button 
          variant="text" 
          size="small" 
          startIcon={<EmailIcon />} 
          color="primary"
          sx={{ p: 0, '&:hover': { bgcolor: 'transparent', textDecoration: 'underline' } }}
        >
          {email}
        </Button>
      </CardContent>
    </Card>
  );
}
