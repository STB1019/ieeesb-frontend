import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Navbar.css";
import Login from "./Login.js";

import instagram from "./logos/logo-instagram.png";
import linkedin from "./logos/logo-linkedin.png";
import youtube from "./logos/logo-youtube.png";
import facebook from "./logos/logo-facebook.png";
import twitter from "./logos/logo-twitter.png";
import github from "./logos/logo-github.png";

function Navbar() {
  return (
    <Router>
      <div id="Navbar">
        <ul id="Listasx">
          <li>
            sidebar?
          </li>
          <li>
            <Link to="." className="NavItem">
              Home
            </Link>
          </li>
          <li>
            <Link to="/progetti" className="NavItem">
              Progetti
            </Link>
          </li>
          <li>
            <Link to="/about-us" className="NavItem">
              About Us
            </Link>
          </li>
        </ul>
        <ul id="Listadx">
          <li>
            <Link to="/login" className="NavItem">
              Login
            </Link>
          </li>
          <li>
            <img
              className="logoSocial"
              src={instagram}
              alt="Instagram"
            />
          </li>
          <li>
            <img
              className="logoSocial"
              src={linkedin}
              alt="LinkedIn"
            />
          </li>
          <li>
            <img
              className="logoSocial"
              src={youtube}
              alt="Youtube"
            />
          </li>
          <li>
            <img
              className="logoSocial"
              src={facebook}
              alt="Facebook"
            />
          </li>
          <li>
            <img
              className="logoSocial"
              src={twitter}
              alt="Twitter"
            />
          </li>
          <li>
            <img
              className="logoSocial"
              src={github}
              alt="GitHub"
            />
          </li>
        </ul>
      </div>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default Navbar;
