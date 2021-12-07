import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { requestData } from '../services/requests';
import Loading from './Loading';

const GamesTable = ({ isFiltered }) => {
  const [games, setGames] = useState([]);
  const [gamesFiltered, setGamesFiltered] = useState([]);
  const [isAdm, setIsAdm] = useState(false);

  useEffect(() => {
    const endpoint = '/matches';

    if (!games.length) {
      requestData(endpoint)
        .then((response) => {
          setGames(response);
          setGamesFiltered(response.filter(({ inProgress }) => inProgress));
        })
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
            (isFiltered ? games : gamesFiltered)
              .sort((a, b) => b.inProgress - a.inProgress)
              .map(({
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
                              disabled={ !inProgress }
                              onClick={ () => localStorage.setItem('game', 'editar') }
                            >
                              { (inProgress) ? 'Editar' : 'Finalizada'}
                            </button>
                          </Link>
                        )
                        : <div>{ (inProgress) ? 'Em andamento' : 'Finalizada' }</div>
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

GamesTable.propTypes = {
  isFiltered: PropTypes.bool.isRequired,
};

export default GamesTable;
