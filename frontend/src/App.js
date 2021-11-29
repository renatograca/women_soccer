import { Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';
import MatchSettings from './pages/MatchSettings';
import Leaderboard from './pages/Leaderboard';
import Games from './pages/Games';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route path="adm/settings" element={ <MatchSettings /> } />
      <Route path="/leaderboard" element={ <Leaderboard /> } />
      <Route path="/games" element={ <Games /> } />
      <Route path="/login" element={ <Login /> } />
      <Route exact path="/" element={ <Navigate to="/leaderboard" /> } />
    </Routes>
  );
}

export default App;
