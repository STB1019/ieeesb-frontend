import React from 'react';
import './App.css';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';

import ScrollToTop from './ScrollToTop';
import Navbar from './navbar/Navbar';
import Highlight from './highlight/Highlight';
import Latest from './latest/Latest';
import Projects from './projects/Projects';
import ProjectPage from './projects/ProjectPage';
import Articles from './articles/Articles';
import Article from './article/Article';
import AboutUs from './about-us/AboutUs';
import Post from './post/Post';

export default function App() {
  return (
    <div className="App">
      <Router>
        {/* Da fare:
        layout di ProgectPage, di Article e di Articles
        pagina per fare il POST
        */}
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path="/projects/:id/:id">
            <Article />
          </Route>
          <Route path="/projects/:id">
            <ProjectPage />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/articles">
            <Articles />
          </Route>
          <Route path="/aboutus">
            <AboutUs />
          </Route>
          <Route path="/post">
            <Post />
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
