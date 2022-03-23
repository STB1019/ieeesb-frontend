import React from 'react';
import Box from '@mui/material/Box';
import HighlightArticle from '../article/HighlightArticle';
import HighlightArticle2 from '../article/HighlightArticle2';
import './Highlight.css';

export default function Highlight() {
  return (
    <Box id="highlight">
      <Box id="a">
        <HighlightArticle2 />
      </Box>
      <Box id="b">
        <Box id="c">
          <HighlightArticle />
          <HighlightArticle />
        </Box>
        <Box id="d">
          <HighlightArticle />
          <HighlightArticle />
        </Box>
      </Box>
    </Box>
  );
}
