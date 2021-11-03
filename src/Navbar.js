import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Navbar.css";
import Login from "./Login.js";
import instagram from "./logo-instagram.png";

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
              src="logos/logo-linkedin.png"
              alt="LinkedIn"
            />
          </li>
          <li>
            <img
              className="logoSocial"
              src="logos/logo-youtube.png"
              alt="Youtube"
            />
          </li>
          <li>
            <img
              className="logoSocial"
              src="logos/logo-facebook.png"
              alt="Facebook"
            />
          </li>
          <li>
            <img
              className="logoSocial"
              src="logos/logo-twitter.png"
              alt="Twitter"
            />
          </li>
          <li>
            <img
              className="logoSocial"
              src="logos/logo-github.png"
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
