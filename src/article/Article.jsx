import React from 'react';
import ReactMarkdown from 'react-markdown';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '../Breadcrumbs';
import './Article.css';

import { getArticleFromId } from '../APIService';

export default function Article() {
  const id = window.location.pathname.split('/').pop();
  const json = getArticleFromId(id);

  const authorDate = `${json.author}, ${json.date}`;

  return (
    <Box id="article-whole">
      <Box id="article">
        <Breadcrumbs crumbs={['Progetti', json.project, json.title]} />
        <Typography variant="h3" id="article-title">{json.title}</Typography>
        <Typography variant="h5" id="article-subtitle">{json.subtitle}</Typography>
        <Typography variant="h6" id="article-author-date">{authorDate}</Typography>
        <Box id="article-image-container">
          <img id="article-image" src={json.image} alt="errore" />
        </Box>
        <Box id="article-markdown">
          <ReactMarkdown>{json.markdown}</ReactMarkdown>
        </Box>
      </Box>
    </Box>
  );
}
