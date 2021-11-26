import { Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';
import Leaderboard from './pages/Leaderboard';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route path="/leaderboard" element={ <Leaderboard /> } />
      <Route path="/login" element={ <Login /> } />
      <Route exact path="/" element={ <Navigate to="/leaderboard" /> } />
    </Routes>
  );
}

export default App;
