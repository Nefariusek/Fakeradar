import React from 'react';
import HomePage from './views/HomePage';
import { divStyle } from './constants/pagesStyles';
import './App.css';

function App() {
  return (
    <div style={divStyle}>
      <HomePage />
    </div>
  );
}

export default App;
