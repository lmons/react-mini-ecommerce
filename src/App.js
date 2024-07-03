import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<div/>} />
            <Route path="/cart" element={<div/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
