import React from 'react';
import Box from '@mui/material/Box';
import data from './prova.json';
import './Article.css';

export default function Article() {
  return (
    <Box>
      <p>{data.title}</p>
    </Box>
  );
}
