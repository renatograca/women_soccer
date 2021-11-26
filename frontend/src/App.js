import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Leaderboard from './components/Leaderboard';

function App() {
  return (
    <Routes>
      <Route path="/leaderboard" element={ <Leaderboard /> } />
    </Routes>
  );
}

export default App;
