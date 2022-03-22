import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Casa from '../assets/prova.jpg';
import './Article.css';

export default function Article() {
  return (
    <Box id="whole">
      <Box id="image-container">
        <Box id="image" style={{ backgroundImage: `url(${Casa})` }} />
      </Box>
      <Box id="text-container">
        <Box id="text">
          <Typography variant="h5" id="article-title">
            Programma Arnaldo 2022
          </Typography>
          <Typography variant="subtitle1">
            Gira una fake-news: Alessio non sarà un insegnante. Ci dispiace, ma ha di meglio da fare. Eh vabbé, sopravviveremo T_T
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
