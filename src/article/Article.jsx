import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Box from '@mui/material/Box';
import json from './fileJson.json';
import markdown from './markdown.md';
import './Article.css';

export default function Article() {
  const [markdownText, setMarkdownText] = useState('error');
  fetch(markdown).then((response) => response.text()).then((text) => {
    setMarkdownText(text);
  });

  return (
    <Box>
      <p id="a">{json.title}</p>
      <Box id="article-markdown">
        <ReactMarkdown>{markdownText}</ReactMarkdown>
      </Box>
    </Box>
  );
}
