import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './Navbar.css';
import Login from './Login.js';

function Navbar() {
  return(
    <Router>
      <ul>
        <li><Link to=".">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
      <Switch>
        <Route path="/login">
          <Login/>
        </Route>
      </Switch>
    </Router>
  );
}

export default Navbar;
