import React from 'react';
import './App.css';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';

import Navbar from './navbar/Navbar';
import Article from './article/Article';
import Highlight from './highlight/Highlight';
import Latest from './latest/Latest';
import AboutUs from './about-us/AboutUs';
import ScrollToTop from './ScrollToTop';

export default function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path="/article">
            <Article />
          </Route>
          <Route path="/">
            <Highlight />
            <Latest />
          </Route>
          <Route path="/aboutus">
            <AboutUs />
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
