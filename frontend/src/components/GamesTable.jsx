import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { requestData } from '../services/requests';
import Loading from './Loading';

const GamesTable = () => {
  const [games, setGames] = useState([]);
  const [isAdm, setIsAdm] = useState(false);

  useEffect(() => {
    const url = 'http://localhost:3001';
    const endpoint = '/matches';

    if (!games.length) {
      requestData(url, endpoint)
        .then((response) => setGames(response))
        .catch((error) => console.log(error));
    }

    const user = JSON.parse(localStorage.getItem('user')) || {};
    if (user.role === 'adm') { setIsAdm(true); }
  }, [games]);

  if (!games.length) {
    return (<Loading />);
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Time Mandante</th>
            <th>Gols</th>
            <th>VS</th>
            <th>Gols</th>
            <th>Time Visitante</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {
            games.map(({
              id,
              homeClub,
              homeTeamGoals,
              awayClub,
              awayTeamGoals,
              inProgress,
            }) => (
              <tr key={ id }>
                <td>{ homeClub.clubName }</td>
                <td>{ homeTeamGoals }</td>
                <td>X</td>
                <td>{ awayClub.clubName }</td>
                <td>{ awayTeamGoals }</td>
                <td>
                  {
                    (isAdm)
                      ? (
                        <Link
                          to="/adm/settings"
                          state={
                            { id,
                              homeClub,
                              homeTeamGoals,
                              awayClub,
                              awayTeamGoals,
                              inProgress }
                          }
                        >
                          <button
                            type="button"
                            disabled={ inProgress }
                            onClick={ () => localStorage.setItem('game', 'editar') }
                          >
                            Editar
                          </button>
                        </Link>
                      )
                      : <div>{ (inProgress) ? 'Finalizada' : 'Em andamento' }</div>
                  }
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default GamesTable;
