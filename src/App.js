import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Comics from './pages/marvelPage';
import SeriesHome from './pages/seriesHome';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path= '/' element = {<Comics/>}/>
        <Route exact path= '/series' element = {<SeriesHome/>}/>
      </Routes>
    </Router>
  );
}

export default App;
