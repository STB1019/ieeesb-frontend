import React from 'react';
import Box from '@mui/material/Box';
import ArticlesCard from './ArticlesCard';
import './Articles.css';

import { getArticleList } from '../APIService';

export default function Articles() {
  const jsonArray = getArticleList();

  return (
    <Box className="whole-margin">
      <Box className="whole">
        <h2 className="whole-title">
          Articoli
        </h2>
        {jsonArray.map((jsonFile) => (
          <ArticlesCard json={jsonFile} />
        ))}
      </Box>
    </Box>
  );
}
