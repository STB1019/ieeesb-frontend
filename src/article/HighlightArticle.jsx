import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Casa from '../assets/prova.jpg';
import './HighlightArticle.css';

export default function HighlightArticle() {
  return (
    <Box id="whole-ha">
      <Box id="image-container-ha">
        <Box id="image-ha" style={{ backgroundImage: `url(${Casa})` }}>
          <Box id="text-container-ha">
            <Box id="text-ha">
              <Typography variant="h6" id="article-title-ha" color="common.white">
                Programma Arnaldo 2022
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
