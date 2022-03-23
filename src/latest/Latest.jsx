import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LatestArticle from '../article/LatestArticle';
import './Latest.css';

export default function Latest() {
  return (
    <Box id="latest">
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
  );
}
