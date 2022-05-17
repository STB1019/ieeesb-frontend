import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LatestArticle from './LatestArticle';
import './Latest.css';

import { getLatests } from '../APIService';

export default function Latest() {
  const jsonMatrix = getLatests();

  /* l = latest */
  return (
    <Box id="latest">
      <Box id="l-whole">
        <Typography variant="h2" id="l-title">
          Latest News
        </Typography>
        {jsonMatrix.map((jsonArray) => (
          <Box className="article-list">
            {jsonArray.map((jsonFile) => (
              <LatestArticle json={jsonFile} />
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
