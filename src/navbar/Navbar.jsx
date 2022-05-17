import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ButtonGroup from '@mui/material/ButtonGroup';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

import './Navbar.css';
import { Link } from 'react-router-dom';

export default function ButtonAppBar() {
  return (
    <Box id="navbar-whole">
      <AppBar id="navbar-appbar" position="static">
        <Toolbar id="navbar-toolbar">
          <Box id="navbar-links">
            <ButtonGroup variant="text" aria-label="text button group">
              <Box>
                <Link className="navbar-link" to="/">
                  <Button className="sbutton" color="white">Home</Button>
                </Link>
                <Link className="navbar-link" to="/projects">
                  <Button className="sbutton" color="white">Progetti</Button>
                </Link>
                <Link className="navbar-link" to="/articles">
                  <Button className="sbutton" color="white">Articoli</Button>
                </Link>
                <Link className="navbar-link" to="/aboutus">
                  <Button className="sbutton" color="white">About Us</Button>
                </Link>
              </Box>
            </ButtonGroup>
          </Box>
          <ButtonGroup id="navbar-social" variant="text" aria-label="text button group">
            <IconButton
              edge="start"
              sx={{ margin: '-3px' }}
              href="https://www.instagram.com/ieee_sb_brescia/"
            >
              <InstagramIcon color="white" />
            </IconButton>
            <IconButton
              edge="start"
              sx={{ margin: '-3px' }}
              href="https://www.linkedin.com/company/stb1019"
            >
              <LinkedInIcon color="white" />
            </IconButton>
            <IconButton
              edge="start"
              sx={{ margin: '-3px' }}
              href="https://www.youtube.com/channel/UCStUvurgwwAgs_W-k5Dci3Q"
            >
              <YouTubeIcon color="white" />
            </IconButton>
            <IconButton
              edge="start"
              sx={{ margin: '-3px' }}
              href="https://www.facebook.com/stb01019/"
            >
              <FacebookIcon color="white" />
            </IconButton>
            <IconButton
              edge="start"
              sx={{ margin: '-3px' }}
              href="https://twitter.com/stb1019"
            >
              <TwitterIcon color="white" />
            </IconButton>
            <IconButton
              edge="start"
              sx={{ margin: '-3px' }}
              href="https://github.com/STB1019"
            >
              <GitHubIcon color="white" />
            </IconButton>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
