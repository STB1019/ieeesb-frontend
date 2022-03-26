import React from 'react';
import Box from '@mui/material/Box';
import HighlightArticle from './HighlightArticle';
import './Highlight.css';

export default function Highlight() {
  /* h = highlight */
  return (
    <Box id="highlight">
      <Box id="h-whole">
        <Box id="h-left">
          <HighlightArticle showSubtitle />
        </Box>
        <Box id="h-right">
          <Box id="h-upper-right">
            <HighlightArticle />
            <HighlightArticle />
          </Box>
          <Box id="h-lower-right">
            <HighlightArticle />
            <HighlightArticle />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
