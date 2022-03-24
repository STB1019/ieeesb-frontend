import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Casa from '../assets/prova.jpg';
import './HighlightArticle.css';

export default function HighlightArticle({ showSubtitle }) {
  return (
    <Box id="whole-ha">
      <Box id="image-container-ha">
        <Box id="image-ha" style={{ backgroundImage: `url(${Casa})` }}>
          <Box id="text-container-ha">
            <Box id="text-margin-ha">
              <Box id="text-ha">
                <Typography variant="h6" id="article-title-ha" color="common.white">
                  Programma Arnaldo 2022
                </Typography>
                { showSubtitle === true && (
                <Typography variant="subtitle1" color="common.white">
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
  showSubtitle: PropTypes.bool.isRequired,
};
