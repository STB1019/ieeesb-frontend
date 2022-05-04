import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Casa from '../assets/prova.jpg';
import './LatestArticle.css';

export default function LatestArticle() {
  /* la = latest article */
  return (
    <Link id="la-whole" to="/article">
      <Box id="la-image-container">
        <Box id="la-image" style={{ backgroundImage: `url(${Casa})` }} />
      </Box>
      <Box id="la-text-container">
        <Box id="la-text">
          <Typography variant="h5" id="la-article-title">
            Programma Arnaldo 2022
          </Typography>
          <Typography variant="subtitle1">
            Gira una fake-news: Alessio non sarà un insegnante. Ci dispiace, ma ha di meglio da fare. Eh vabbé, sopravviveremo T_T
          </Typography>
        </Box>
      </Box>
    </Link>
  );
}
