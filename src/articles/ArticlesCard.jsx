import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import './ArticlesCard.css';

export default function ArticlesCard(props) {
  const { json } = props;

  const projectURL = json.project.replace(/\W+/g, '-').toLowerCase();

  /* ac = articles card */
  return (
    <Link id="ac-whole" to={`/projects/${projectURL}/${json.id}`}>
      <Box id="ac-image-container">
        <Box id="ac-image" style={{ backgroundImage: `url(${json.image})` }} />
      </Box>
      <Box id="ac-text-container">
        <Box id="ac-text">
          <Typography variant="h5" id="ac-article-title">
            {json.title}
          </Typography>
          <Typography variant="subtitle1">
            {json.subtitle}
          </Typography>
        </Box>
      </Box>
    </Link>
  );
}
