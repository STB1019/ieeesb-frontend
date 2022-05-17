import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import './ProjectCard.css';

export default function ProjectCard(props) {
  const { json } = props;

  const projectURL = json.name.replace(/\W+/g, '-').toLowerCase();

  /* pc = project card */
  return (
    <Link id="pc-whole" to={`/projects/${projectURL}`}>
      <Box id="pc-image-container">
        <Box id="pc-image" style={{ backgroundImage: `url(${json.image})` }} />
      </Box>
      <Box id="pc-text-container">
        <Box id="pc-text">
          <Typography variant="h5" id="pc-article-title">
            {json.name}
          </Typography>
          <Typography variant="subtitle1">
            {json.subtitle}
          </Typography>
        </Box>
      </Box>
    </Link>
  );
}
