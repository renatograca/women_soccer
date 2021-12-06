import React, { useState, useEffect } from 'react';
import { requestData } from '../services/requests';
import Loading from './Loading';

const LeaderboardTable = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    const endpoint = '/result';

    if (leaderboard.length === 0) {
      requestData(endpoint)
        .then((response) => setLeaderboard(response))
        .catch((error) => console.log(error));
    }
  }, [leaderboard]);

  if (leaderboard.length === 0) {
    return (<Loading />);
  }

  return (
    <div>
      <table>
        <thead data-testid="leaderboardTable-header">
          <tr>
            <th data-testid="classification">Classificação</th>
            <th data-testid="total-points">P</th>
            <th data-testid="total-games">J</th>
            <th data-testid="total-victories">V</th>
            <th data-testid="total-draws">E</th>
            <th data-testid="total-looses">D</th>
            <th data-testid="goals-favor">GP</th>
            <th data-testid="goals-own">GC</th>
            <th data-testid="goals-balance">SG</th>
            <th data-testid="efficiency">%</th>
          </tr>
        </thead>
        <tbody data-testid="leaderboardTable-body">
          {
            leaderboard.map(({
              name,
              totalPoints,
              totalGames,
              totalVictories,
              totalDraws,
              totalLooses,
              goalsFavor,
              goalsOwn,
              goalsBalance,
              efficiency,
            },
            index) => (
              <tr key={ name } data-testid={ `${index + 1}-leaderbord-position` }>
                <td>{`${index + 1} ${name}`}</td>
                <td>{ totalPoints }</td>
                <td>{ totalGames }</td>
                <td>{ totalVictories }</td>
                <td>{ totalDraws }</td>
                <td>{ totalLooses }</td>
                <td>{ goalsFavor }</td>
                <td>{ goalsOwn }</td>
                <td>{ goalsBalance }</td>
                <td>{ efficiency }</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default LeaderboardTable;
