import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// import ArticlesCard from './ArticlesCard';
import './Articles.css';

// import { getLatests } from '../APIService';

export default function Articles() {
  // const jsonMatrix = getLatests();

  /* l = latest */
  return (
    <Box id="latest">
      <Box id="l-whole">
        <Typography variant="h2" id="l-title">
          Articoli
        </Typography>
        <Typography variant="h1" color="red">DA FARE</Typography>
        {/* jsonMatrix.map((jsonArray) => (
          <Box className="article-list">
            {jsonArray.map((jsonFile) => (
              <ArticlesCard json={jsonFile} />
            ))}
          </Box>
        )) */}
      </Box>
    </Box>
  );
}
