import React from 'react';
import LeaderboardTable from '../components/LeaderboardTable';
import LoginBtn from '../components/LoginBtn';

const Leaderboard = () => (
  <>
    <LoginBtn />
    <h2>Classificação</h2>
    <LeaderboardTable />
  </>
);

export default Leaderboard;
