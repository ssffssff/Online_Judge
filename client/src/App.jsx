// App.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
