import React from 'react';
import './App.css';
import Navbar from './navbar/Navbar';
import Highlight from './highlight/Highlight';
import Latest from './latest/Latest';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Highlight />
      <Latest />
    </div>
  );
}
