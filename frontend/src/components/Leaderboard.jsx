import React, { useState, useEffect } from 'react';
import requestLeaderboard from '../services/requests';
import Loading from './Loading';

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    const url = 'http://localhost:3001';
    const endpoint = '/result';

    if (leaderboard.length === 0) {
      requestLeaderboard(url, endpoint)
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
        <thead>
          <tr>
            <th>Classificação</th>
            <th>P</th>
            <th>J</th>
            <th>V</th>
            <th>E</th>
            <th>D</th>
            <th>GP</th>
            <th>GC</th>
            <th>SG</th>
            <th>%</th>
          </tr>
        </thead>
        <tbody>
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
              <tr key={ name }>
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

export default Leaderboard;
