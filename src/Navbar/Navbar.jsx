import React from 'react';
import {
  Link, BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import './Navbar.css';
import Sidebar from '../Sidebar/Sidebar';
import Login from '../Login/Login';
import Projects from '../Projects/Projects';
import AboutUs from '../AboutUs/AboutUs';

import instagram from '../logos/logo-instagram.png';
import linkedin from '../logos/logo-linkedin.png';
import youtube from '../logos/logo-youtube.png';
import facebook from '../logos/logo-facebook.png';
import twitter from '../logos/logo-twitter.jpg';
import github from '../logos/logo-github.png';

export default function Navbar() {
  return (
    <Router>
      <div id="Navbar">
        <ul className="listaLink" id="Listasx">
          <li>
            <Sidebar />
          </li>
          <li className="scalable">
            <Link to="." className="NavItem">
              Home
            </Link>
          </li>
          <li className="scalable">
            <Link to="/projects" className="NavItem">
              Progetti
            </Link>
          </li>
          <li className="scalable">
            <Link to="/aboutus" className="NavItem">
              About Us
            </Link>
          </li>
        </ul>
        <ul className="listaLink" id="Listadx">
          <li className="scalable">
            <Link to="/login" className="NavItem">
              Login
            </Link>
          </li>
          <li className="scalable">
            <a href="https://www.instagram.com/ieee_sb_brescia/">
              <img className="logoSocial" src={instagram} alt="Instagram" />
            </a>
          </li>
          <li className="scalable">
            <a href="https://www.linkedin.com/company/stb1019">
              <img className="logoSocial" src={linkedin} alt="LinkedIn" />
            </a>
          </li>
          <li className="scalable">
            <a href="https://www.youtube.com/channel/UCStUvurgwwAgs_W-k5Dci3Q">
              <img className="logoSocial" src={youtube} alt="Youtube" />
            </a>
          </li>
          <li className="scalable">
            <a href="https://www.facebook.com/stb01019/">
              <img className="logoSocial" src={facebook} alt="Facebook" />
            </a>
          </li>
          <li className="scalable">
            <a href="https://twitter.com/stb1019">
              <img className="logoSocial" src={twitter} alt="Twitter" />
            </a>
          </li>
          <li className="scalable">
            <a href="https://github.com/STB1019">
              <img className="logoSocial" src={github} alt="GitHub" />
            </a>
          </li>
        </ul>
      </div>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/aboutus">
          <AboutUs />
        </Route>
      </Switch>
    </Router>
  );
}
