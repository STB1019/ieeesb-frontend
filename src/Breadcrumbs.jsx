import React from 'react';
import MUIBreadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function Breadcrumbs(props) {
  const { crumbs } = props;
  
  const URLParts = window.location.pathname.replace(/-/g, ' ').split('/');
  const firstDestination = `/${URLParts[1]}`;
  const destinations = [firstDestination];
  const indexes = [0];
  for (let i = 2; i < URLParts.length - 1; i++) {
    const temp = `${destinations[i - 2]}/${URLParts[i]}`;
    destinations.push(temp);
    indexes.push(i - 1);
  }

  return (
    <MUIBreadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
    >
      {indexes.map((i) => (
        <Link underline="hover" color="inherit" key={i + 1} href={destinations[i]}>
          {crumbs[i]}
        </Link>
      ))}
      <Typography color="text.primary" key={crumbs.length}>
        {crumbs[crumbs.length - 1]}
      </Typography>
    </MUIBreadcrumbs>
  );
}
