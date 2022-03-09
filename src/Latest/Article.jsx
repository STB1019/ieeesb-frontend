import React from 'react';
import Box from '@mui/material/Box';
import Casa from '../assets/prova.jpg';

export default function Latest() {
  return (
    <Box sx={{
      height: '500px', width: '500px', overflow: 'hidden',
    }}
    >
      <img src={Casa} alt="ccc" width="100%" backgroundSize="cover" fit="crop" auto="format" />
    </Box>
  );
}
