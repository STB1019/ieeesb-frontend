import React from 'react';
import ReactMarkdown from 'react-markdown';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ArticlesCard from '../articles/ArticlesCard';
import Breadcrumbs from '../Breadcrumbs';
import './ProjectPage.css';

import { getProjectFromName, getArticlesOfProject } from '../APIService';

export default function ProjectPage() {
  const name = window.location.pathname.split('/').pop();
  const json = getProjectFromName(name);
  const jsonArray = getArticlesOfProject(name);

  return (
    <Box id="project-whole">
      <Box id="project">
        <Breadcrumbs crumbs={['Progetti', json.name]} />
        <Typography variant="h3" id="project-title">{json.name}</Typography>
        <Typography variant="h6" id="project-members">{json.members}</Typography>
        <Typography variant="h5" id="project-subtitle">{json.subtitle}</Typography>
        <Box id="project-image-container">
          <img id="project-image" src={json.image} alt="errore" />
        </Box>
        <Box id="project-markdown">
          <ReactMarkdown>{json.markdown}</ReactMarkdown>
        </Box>
        {jsonArray.map((jsonFile) => (
          <ArticlesCard json={jsonFile} />
        ))}
      </Box>
    </Box>
  );
}
