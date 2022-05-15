import React from 'react';
import './App.css';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';

import Typography from '@mui/material/Typography';

import ScrollToTop from './ScrollToTop';
import Navbar from './navbar/Navbar';
import Highlight from './highlight/Highlight';
import Latest from './latest/Latest';
import Projects from './projects/Projects';
import ProjectPage from './projects/ProjectPage';
import Articles from './articles/Articles';
import Article from './article/Article';
import AboutUs from './about-us/AboutUs';

export default function App() {
  return (
    <div className="App">
      <Typography variant="h5" color="red">far sì che la navbar diventi come quella destop appena possibile, quindi prima della modalità tablet e dopo la telefono</Typography>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path="/projects/:id">
            <ProjectPage />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/articles/:id">
            <Article />
          </Route>
          <Route path="/articles">
            <Articles />
          </Route>
          <Route path="/aboutus">
            <AboutUs />
          </Route>
          <Route path="/">
            <Highlight />
            <Latest />
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
