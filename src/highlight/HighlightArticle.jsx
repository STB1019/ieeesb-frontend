import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import './HighlightArticle.css';

export default function HighlightArticle(props) {
  const { showSubtitle } = props;
  const { json } = props;

  const projectURL = json.project.replace(/\W+/g, '-').toLowerCase();

  /* ha = highlight article */
  return (
    <Link id="ha-whole" to={`/projects/${projectURL}/${json.id}`}>
      <Box id="ha-image-container">
        <Box id="ha-image" style={{ backgroundImage: `url(${json.image})` }}>
          <Box id="ha-text-container">
            <Box id="ha-text-margin">
              <Box id="ha-text">
                <Typography variant="h6" id="ha-article-title">
                  {json.title}
                </Typography>
                { showSubtitle === true && (
                <Typography variant="subtitle1" id="ha-article-subtitle">
                  {json.subtitle}
                </Typography>
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Link>
  );
}
