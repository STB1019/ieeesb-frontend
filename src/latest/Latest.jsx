import React from 'react';
import Box from '@mui/material/Box';
import LatestArticle from './LatestArticle';
import './Latest.css';

import { getLatests } from '../APIService';

export default function Latest() {
  const jsonMatrix = getLatests();

  return (
    <Box className="whole-margin">
      <Box className="whole">
        <h2 className="whole-title">
          Latest News
        </h2>
        {jsonMatrix.map((jsonArray) => (
          <Box className="grid-display">
            {jsonArray.map((jsonFile) => (
              <LatestArticle json={jsonFile} />
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
