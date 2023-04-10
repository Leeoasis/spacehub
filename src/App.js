import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Rockets from './routes/Rockets';
import Profile from './routes/Profile';
import Missions from './routes/Missions';
import './styles/App.css';
import Navbar from './components/Navbar';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Rockets />} />
      <Route path="missions" element={<Missions />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </Router>
);

export default App;
