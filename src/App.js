import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Tsx from './Tsx';
import Block from './Block';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tsx" element={<Tsx />} />
          <Route path="/blocks" element={<Block />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
