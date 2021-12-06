import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginBtn from '../components/LoginBtn';
import GamesTable from '../components/GamesTable';

const Games = () => {
  const [isFiltered, setIsFiltered] = useState(false);
  return (
    <>
      <div>
        <LoginBtn />
      </div>
      <div>
        <Link to="/adm/settings">Adicionar Partida</Link>
        <Link to="/leaderboard">Ver Classificação</Link>
      </div>
      <label htmlFor="game-filter">
        Partidas Finalizadas
        <input
          id="game-filter"
          type="checkbox"
          defaultChecked={ isFiltered }
          onClick={ () => setIsFiltered(!isFiltered) }
        />
      </label>
      <h1>Tabela de Jogos</h1>
      <GamesTable isFiltered={ isFiltered } />
    </>
  );
};

export default Games;
