import React from 'react';
import Box from '@mui/material/Box';
import Casa from '../assets/prova.jpg';
import './Article.css';

export default function Article() {
  return (
    <Box
      className="whole"
      style={{ backgroundImage: `url(${Casa})` }} 
    >
      <Box className="image-container">
        <Box className="image" style={{ backgroundImage: `url(${Casa})` }} />
        <Box sx={{ width: '100px', backgroundColor: 'red' }}>
          <p>
            sheeeeeeeeeeeeeeeeeeeeeeeeeeesh
          </p>
        </Box>
      </Box>
    </Box>
  );
}
