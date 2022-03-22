import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ButtonGroup from '@mui/material/ButtonGroup';
import MenuIcon from '@mui/icons-material/Menu';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

import './Navbar.css';
import {
  Link, BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import Projects from '../projects/Projects';
import AboutUs from '../about-us/AboutUs';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <div>
            <IconButton edge="start">
              <MenuIcon color="white" />
            </IconButton>

            <ButtonGroup variant="text" aria-label="text button group">
              <Router>
                <Link className="link" to="/">
                  <Button className="sbutton" color="white">Home</Button>
                </Link>
                <Link className="link" to="/projects">
                  <Button className="sbutton" color="white">Progetti</Button>
                </Link>
                <Link className="link" to="/aboutus">
                  <Button className="sbutton" color="white">About Us</Button>
                </Link>
                <Switch>
                  <Route path="/projects">
                    <Projects />
                  </Route>
                  <Route path="/aboutus">
                    <AboutUs />
                  </Route>
                </Switch>
              </Router>
            </ButtonGroup>
          </div>
          <ButtonGroup variant="text" aria-label="text button group">
            <IconButton
              edge="start"
              sx={{ mr: 1 }}
              href="https://www.instagram.com/ieee_sb_brescia/"
            >
              <InstagramIcon color="white" />
            </IconButton>
            <IconButton
              edge="start"
              sx={{ mr: 1 }}
              href="https://www.linkedin.com/company/stb1019"
            >
              <LinkedInIcon color="white" />
            </IconButton>
            <IconButton
              edge="start"
              sx={{ mr: 1 }}
              href="https://www.youtube.com/channel/UCStUvurgwwAgs_W-k5Dci3Q"
            >
              <YouTubeIcon color="white" />
            </IconButton>
            <IconButton
              edge="start"
              sx={{ mr: 1 }}
              href="https://www.facebook.com/stb01019/"
            >
              <FacebookIcon color="white" />
            </IconButton>
            <IconButton
              edge="start"
              sx={{ mr: 1 }}
              href="https://twitter.com/stb1019"
            >
              <TwitterIcon color="white" />
            </IconButton>
            <IconButton
              edge="start"
              sx={{ mr: 1 }}
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
