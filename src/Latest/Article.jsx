import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Casa from '../assets/prova.jpg';

export default function Latest() {
  const height = 380;
  return (
    <Grid 
      container
      sx={{
        width: '80%', height: '400px', mx: 'auto', my: '20px',
      }}
      backgroundColor="blue"
    >
      <Grid 
        item
        xs={4}
      >
        <Box sx={{
          width: '100%', height: `${height}px`, mx: '10px', my: '10px', overflow: 'hidden', backgroundImage: `url(${Casa})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
        }}
        />
      </Grid>
      <Grid item xs={8}>
        <p>a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a</p>
      </Grid>
    </Grid>
  );
}
