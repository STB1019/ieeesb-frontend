import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './Navbar.css';
import Login from './Login.js';

function Navbar() {
  return(
    <Router>
      <div id="Navbar">
        <ul id="Listasx">
          <li><Link to="." className="NavItem">Home</Link></li>
          <li><Link to="/login" className="NavItem">Login</Link></li>
        </ul>
      </div>
      <Switch>
        <Route path="/login">
          <Login/>
        </Route>
      </Switch>
    </Router>
  );
}

export default Navbar;
