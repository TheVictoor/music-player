import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Routes from './routes.js';

import './App.css';

function App() {
  return (
    <div id="app">
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
