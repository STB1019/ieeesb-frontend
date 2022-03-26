import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Casa from '../assets/prova.jpg';
import './HighlightArticle.css';

export default function HighlightArticle({ showSubtitle }) {
  /* ha = highlight article */
  return (
    <Box id="ha-whole">
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
    </Box>
  );
}

HighlightArticle.propTypes = {
  showSubtitle: PropTypes.bool,
};

HighlightArticle.defaultProps = { showSubtitle: false };
