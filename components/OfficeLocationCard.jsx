"use client";

import React from 'react';
import {
  Box,
  Card,
  Typography,
  Stack,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function OfficeLocationCard() {
  return (
    <Stack spacing={4}>
      {/* HQ Contact info */}
      <Card sx={{ p: 4, borderRadius: 2, bgcolor: '#F9FAFB', border: '1px solid', borderColor: 'divider', boxShadow: 'none' }}>
        <Typography variant="h6" sx={{ fontWeight: 800, mb: 3, color: 'primary.main' }}>
          Siège
        </Typography>
        <Stack spacing={3}>
          <Box>
            <Typography variant="overline" sx={{ fontWeight: 800, color: 'text.disabled' }}>Libreville, Gabon</Typography>
            <Typography variant="body2" sx={{ mt: 1, fontWeight: 500 }}>
              8522, Libreville, Gabon <br />
              Secteur Atong-Abe
            </Typography>
          </Box>
          <Box>
            <Typography variant="overline" sx={{ fontWeight: 800, color: 'text.disabled' }}>Contact Direct</Typography>
            <Stack spacing={1} sx={{ mt: 1 }}>
              <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PhoneIcon sx={{ fontSize: 16 }} /> +241 66 12 14 65
              </Typography>
              <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'primary.main', fontWeight: 600 }}>
                <EmailIcon sx={{ fontSize: 16 }} /> contact@rmservices.com
              </Typography>
            </Stack>
          </Box>
          <Box>
            <Typography variant="overline" sx={{ fontWeight: 800, color: 'text.disabled' }}>Horaires</Typography>
            <Typography variant="body2" sx={{ mt: 1, fontWeight: 500 }}>
              Lun - Sam : 08:00 – 17:00 <br />
              Dim : Fermé
            </Typography>
          </Box>
        </Stack>
      </Card>

      {/* Google Map Card */}
      <Card
        sx={{
          borderRadius: 2,
          border: '1px solid',
          borderColor: 'divider',
          boxShadow: 'none',
          overflow: 'hidden',
          height: 300
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.71261!2d9.453375!3d0.4063587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x107f3b33aba2d11f%3A0x858bee163f2fe24a!2sRM%20Services!5e0!3m2!1sfr!2sga!4v1712571745000!5m2!1sfr!2sga"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Card>
    </Stack>
  );
}
