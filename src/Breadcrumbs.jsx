import * as React from 'react';
import MUIBreadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function Breadcrumbs(props) {
  const { current } = props;

  const URLParts = window.location.pathname.replace(/-/g, ' ').split('/');
  const firstDestination = `/${URLParts[1]}`;
  const destinations = [firstDestination];
  for (let i = 2; i < URLParts.length - 1; i++) {
    const temp = `${destinations[i - 2]}/${URLParts[i]}`;
    destinations.push(temp);
  }

  return (
    <MUIBreadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
    >
      {destinations.map((url) => (
        <Link underline="hover" color="inherit" href={url}>
          {url.split('/').pop()}
        </Link>
      ))}
      <Typography color="text.primary">
        {current}
      </Typography>
    </MUIBreadcrumbs>
  );
}
