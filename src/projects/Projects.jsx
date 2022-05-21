import React from 'react';
import Box from '@mui/material/Box';
import ProjectCard from './ProjectCard';
import './Projects.css';

import { getProjects } from '../APIService';

export default function Projects() {
  const jsonMatrix = getProjects();

  return (
    <Box className="whole-margin">
      <Box className="whole">
        <h2 className="whole-title">
          Projects
        </h2>
        {jsonMatrix.map((jsonArray) => (
          <Box className="grid-display">
            {jsonArray.map((jsonFile) => (
              <ProjectCard json={jsonFile} />
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
