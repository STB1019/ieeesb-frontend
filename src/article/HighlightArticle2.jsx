import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Casa from '../assets/prova.jpg';
import './HighlightArticle.css';

export default function HighlightArticle() {
  return (
    <Box id="whole-ha">
      <Box id="image-container-ha">
        <Box id="image-ha" style={{ backgroundImage: `url(${Casa})`, height: '80vh' }}>
          <Box id="text-container-ha">
            <Box id="text-ha">
              <Typography variant="h5" id="article-title-ha" color="common.white">
                Programma Arnaldo 2022
              </Typography>
              <Typography variant="subtitle1" id="article-subtitle-ha" color="common.white">
                Gira una fake-news: Alessio non sarà un insegnante. Ci dispiace, ma ha di meglio da fare. Eh vabbé, sopravviveremo T_T
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
