import React from 'react';
import Box from '@mui/material/Box';
import Casa from '../assets/prova.jpg';

export default function Latest() {
  return (
    <Box
      className="whole"
    >
      <Box
        className="image-container"
      >
        <Box 
          className="image"
          sx={{
            aspectRatio: '1', overflow: 'hidden', backgroundImage: `url(${Casa})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
          }}
        />
      </Box>
      <Box sx={{ width: '100px', backgroundColor: 'red' }}>
        <p>
          a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a
          a a a a a a a a a a a a a
        </p>
      </Box>
    </Box>
  );
}
