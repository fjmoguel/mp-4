'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

export default function ArtistSearchForm() {
  const [text, setText] = useState('');
  const router = useRouter();

  return (
    <Box sx={{
        minHeight: '30vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box component="form" onSubmit={async (event) => {
          event.preventDefault();
          if (text.trim() !== '') {
            router.push(`/artist/${text.trim()}`);
          }
        }} sx={{
          px: 4,
          py: 3,
          maxWidth: 400,
          mx: 'auto',
          backgroundColor: '#ffe4c4',
          borderRadius: 2,
          boxShadow: 3,
        }} >
        <Box sx={{ mb: 2, textAlign: 'center' }}>
          <strong>Search for Artist</strong>
          <br/>
          <span style={{ fontSize: '0.9rem' }}>
            to see bio, top albums, and similar artists
          </span>
        </Box>

        <TextField
          fullWidth
          label="Search Artist"
          variant="outlined"
          value={text}
          onChange={(e) => setText(e.target.value)}
          sx={{ backgroundColor: 'white', mb: 2 }}
        />
        <Button type="submit" variant="contained" fullWidth sx={{ backgroundColor: '#20b2aa' }}>
          Search
        </Button>
      </Box>
    </Box>
  );
}