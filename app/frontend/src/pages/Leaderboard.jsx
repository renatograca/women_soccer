import React from 'react';
import { Link } from 'react-router-dom';
import LeaderboardTable from '../components/LeaderboardTable';
import LoginBtn from '../components/LoginBtn';

const Leaderboard = () => (
  <>
    <div>
      <LoginBtn />
    </div>
    <div>
      <Link to="/games">Ver Jogos</Link>
    </div>
    <h2>Classificação</h2>
    <LeaderboardTable />
  </>
);

export default Leaderboard;
