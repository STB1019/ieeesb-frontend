import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Casa from '../assets/prova.jpg';
import './HighlightArticle.css';

export default function HighlightArticle(props) {
  const { showSubtitle } = props;
  // const { json } = props;

  /* ha = highlight article */
  return (
    <Link id="ha-whole" to="/article">
      <Box id="ha-image-container">
        <Box id="ha-image" style={{ backgroundImage: `url(${Casa})` }}>
          <Box id="ha-text-container">
            <Box id="ha-text-margin">
              <Box id="ha-text">
                <Typography variant="h6" id="ha-article-title">
                  Programma Arnaldo 2022
                </Typography>
                { showSubtitle === true && (
                <Typography variant="subtitle1" id="ha-article-subtitle">
                  Gira una fake-news: Alessio non sarà un insegnante. Ci dispiace, ma ha di meglio da fare. Eh vabbé, sopravviveremo T_T
                </Typography>
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Link>
  );
}
