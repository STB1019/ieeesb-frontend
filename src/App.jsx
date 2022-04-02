import React from 'react';
import './App.css';
import Navbar from './navbar/Navbar';
import Article from './article/Article';
import Highlight from './highlight/Highlight';
import Latest from './latest/Latest';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Article />
      <Highlight />
      <Latest />
    </div>
  );
}
