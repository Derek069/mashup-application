import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Comics from './pages/marvelPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path= '/' element = {<Comics/>}/>
      </Routes>
    </Router>
  );
}

export default App;
