import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Article from '../article/Article';
import Article2 from '../article/Article2';
import './Latest.css';

export default function Latest() {
  return (
    <Box id="latest">
      <Typography variant="h2" id="latest-title">
        Latest News
      </Typography>
      <Box className="article-list">
        <Article />
        <Article2 />
      </Box>
      <Box className="article-list">
        <Article />
        <Article2 />
        <Article />
      </Box>
      <Box className="article-list">
        <Article />
        <Article />
        <Article />
        <Article />
      </Box>
    </Box>
  );
}
