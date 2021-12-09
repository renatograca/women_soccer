import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LoginBtn from '../components/LoginBtn';
import GamesTable from '../components/GamesTable';

const Games = () => {
  const [isFiltered, setIsFiltered] = useState(false);
  const [isAdm, setIsAdm] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user')) || {};
    if (user.role === 'admin') { setIsAdm(true); }
  }, []);

  return (
    <>
      <div>
        <LoginBtn />
      </div>
      <div>
        {
          (isAdm)
            ? (<Link to="/adm/settings">Adicionar Partida</Link>)
            : null
        }
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
      <GamesTable isFiltered={ isFiltered } isAdm={ isAdm } />
    </>
  );
};

export default Games;
