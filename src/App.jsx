import React from 'react';
import './App.css';
import {
  Link, BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';

import Navbar from './navbar/Navbar';
import Article from './article/Article';
import Highlight from './highlight/Highlight';
import Latest from './latest/Latest';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Link to="/article">
          <Highlight />
        </Link>
        <Link to="/">
          <Latest />
        </Link>
        <Switch>
          <Route path="/article">
            <Article />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

/*
funzione fetch (javascript): passi indirizzo (IP)
API service: classe esterna per uniformare richieste al server
es. funzione getpost con parametri URL e parametri URL (?param=value&param=...)

*/

/* 
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
*/
