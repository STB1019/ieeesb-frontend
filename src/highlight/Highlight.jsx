import React from 'react';
import Box from '@mui/material/Box';
import HighlightArticle from './HighlightArticle';
import './Highlight.css';

import { getHighlights } from '../APIService';

export default function Highlight() {
  const jsonFiles = getHighlights();

  /* h = highlight */
  return (
    <Box className="whole-margin">
      <Box className="whole" id="h-whole">
        <Box id="h-left">
          <HighlightArticle showSubtitle json={jsonFiles[0]} />
        </Box>
        <Box id="h-right">
          <Box id="h-upper-right">
            <HighlightArticle json={jsonFiles[1]} />
            <HighlightArticle json={jsonFiles[2]} />
          </Box>
          <Box id="h-lower-right">
            <HighlightArticle json={jsonFiles[3]} />
            <HighlightArticle json={jsonFiles[4]} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
