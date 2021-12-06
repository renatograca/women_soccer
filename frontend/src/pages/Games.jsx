import React from 'react';
import { Link } from 'react-router-dom';
import LoginBtn from '../components/LoginBtn';
import GamesTable from '../components/GamesTable';

const Games = () => (
  <>
    <div>
      <LoginBtn />
    </div>
    <div>
      <Link to="/adm/settings">Adicionar Partida</Link>
      <Link to="/leaderboard">Ver Classificação</Link>
    </div>
    <h1>Tabela de Jogos</h1>
    <GamesTable />
  </>
);

export default Games;
