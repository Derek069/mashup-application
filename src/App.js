
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route exact path= '/' element = {<Comics/>}/>sALVADOR Y lUIS */}
        <Route exact path= '/series' element = {<Series/>}/>
      </Routes>
    </Router>
  );
}

export default App;
