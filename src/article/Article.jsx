import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import json from './fileJson.json';
import markdown from './markdown.md';
import './Article.css';

export default function Article() {
  const [markdownText, setMarkdownText] = useState('error');
  fetch(markdown).then((response) => response.text()).then((text) => {
    setMarkdownText(text);
  });

  const authorDate = `${json.author}, ${json.date}`;

  return (
    <Box id="article-whole">
      <Box id="article">
        <Typography variant="h3" id="article-title">{json.title}</Typography>
        <Typography variant="h5" id="article-subtitle">{json.subtitle}</Typography>
        <Typography variant="h6" id="article-author-date">{authorDate}</Typography>
        <Box id="article-image-container">
          <img id="article-image" src={json.image} alt="errore" />
        </Box>
        <Box id="article-markdown">
          <ReactMarkdown>{markdownText}</ReactMarkdown>
        </Box>
      </Box>
    </Box>
  );
}
