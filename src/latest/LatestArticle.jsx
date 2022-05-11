import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import './LatestArticle.css';

export default function LatestArticle(props) {
  const { json } = props;

  /* la = latest article */
  return (
    <Link id="la-whole" to={`/articles/${json.id}`}>
      <Box id="la-image-container">
        <Box id="la-image" style={{ backgroundImage: `url(${json.image})` }} />
      </Box>
      <Box id="la-text-container">
        <Box id="la-text">
          <Typography variant="h5" id="la-article-title">
            {json.title}
          </Typography>
          <Typography variant="subtitle1">
            {json.title}
          </Typography>
        </Box>
      </Box>
    </Link>
  );
}
