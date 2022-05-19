import { React, useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '../Breadcrumbs';
import './Article.css';

import { getArticleFromId } from '../APIService';

export default function Article() {
  const id = '6286515528d65f68607b446d'; // window.location.pathname.split('/').pop();
  const [json, setJson] = useState(null);

  useEffect(() => {
    getArticleFromId(id).then((r) => setJson(r));
  }, []);

  if (!json) {
    return (
      <>
      </>
    );
  }
  const date = new Date(json.updatedAt);
  const [day, month, year] = [date.getDate(), date.getMonth(), date.getFullYear()];
  const authorDate = `${json.author} - ${day}/${month}/${year}`;

  return (
    <Box id="article-whole">
      <Box id="article">
        <Breadcrumbs crumbs={['Progetti', json.projectName, json.title]} />
        <Typography variant="h3" id="article-title">{json.title}</Typography>
        <Typography variant="h5" id="article-subtitle">{json.subtitle}</Typography>
        <Typography variant="h6" id="article-author-date">{authorDate}</Typography>
        <Box id="article-image-container">
          <img id="article-image" src={json.thumbnail} alt="immagine assente" />
        </Box>
        <Box id="article-markdown">
          <ReactMarkdown>{json.content}</ReactMarkdown>
        </Box>
      </Box>
    </Box>
  );
}
