import React from 'react';
import Box from '@mui/material/Box';
import HighlightArticle from '../article/HighlightArticle';
import './Highlight.css';

export default function Highlight() {
  return (
    <Box id="highlight">
      <Box id="left-h">
        <HighlightArticle showSubtitle />
      </Box>
      <Box id="right-h">
        <Box id="upper-right-h">
          <HighlightArticle />
          <HighlightArticle />
        </Box>
        <Box id="lower-right-h">
          <HighlightArticle />
          <HighlightArticle />
        </Box>
      </Box>
    </Box>
  );
}
