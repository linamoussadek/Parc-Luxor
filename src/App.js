import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Component } from './components/Component';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Component />} />
          {/* Define other routes as needed */}
        </Routes>
      </Router>
  );
}

export default App;
