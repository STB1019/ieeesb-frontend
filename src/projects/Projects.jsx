import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ProjectCard from './ProjectCard';
import './Projects.css';

import { getProjects } from '../APIService';

export default function Projects() {
  const jsonMatrix = getProjects();

  /* p = projects */
  return (
    <Box id="projects">
      <Box id="p-whole">
        <Typography variant="h2" id="p-title">
          Projects
        </Typography>
        {jsonMatrix.map((jsonArray) => (
          <Box className="article-list">
            {jsonArray.map((jsonFile) => (
              <ProjectCard json={jsonFile} />
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
