import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Casa from '../assets/prova.jpg';

export default function Latest() {
  const height = 380;
  return (
    <Box
      sx={{
        width: `${width}px`, height: `${height}px`, display: 'flex', flexDirection: 'row', mx: 'auto', my: '20px',
      }}
      backgroundColor="blue"
    >
      <Box
        sx={{
          width: `${imgWidth}px`, height: `${imgHeight}px`, px: `${imgPadding}px`, py: `${imgPadding}px`,
        }}
      >
        <Box sx={{
          width: '100%', height: '100%', overflow: 'hidden', backgroundImage: `url(${Casa})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
        }}
        />
      </Box>
      <Box sx={{ width: `${textWidth}px`, backgroundColor: 'red' }}>
        <p>
          {window.innerWidth}
          {width}
          {a}
          {stateVariable}
          a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a
          a a a a a a a a a a a a a
        </p>
      </Box>
    </Box>
  );
}
