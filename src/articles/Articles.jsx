import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ArticlesCard from './ArticlesCard';
import './Articles.css';

import { getArticleList } from '../APIService';

export default function Articles() {
  const jsonArray = getArticleList();

  /* a = articles */
  return (
    <Box id="articles">
      <Box id="a-whole">
        <Typography variant="h2" id="a-title">
          Articoli
        </Typography>
        {jsonArray.map((jsonFile) => (
          <ArticlesCard json={jsonFile} />
        ))}
      </Box>
    </Box>
  );
}
