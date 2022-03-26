import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LatestArticle from './LatestArticle';
import './Latest.css';

export default function Latest() {
  /* l = latest */
  return (
    <Box id="latest">
      <Box id="l-whole">
        <Typography variant="h2" id="latest-title">
          Latest News
        </Typography>
        <Box className="article-list">
          <LatestArticle />
          <LatestArticle />
          <LatestArticle />
        </Box>
        <Box className="article-list">
          <LatestArticle />
          <LatestArticle />
          <LatestArticle />
        </Box>
        <Box className="article-list">
          <LatestArticle />
          <LatestArticle />
          <LatestArticle />
        </Box>
      </Box>
    </Box>
  );
}
