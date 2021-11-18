import React from 'react';
import leaderboard from '../tests/mock/leaderboarMock';

const Leaderboard = () => (
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
            TotalPoints,
            TotalGames,
            TotalVictories,
            TotalDraws,
            TotalLooses,
            GoalsFavor,
            GoalsOwn,
            GoalsBalance,
            Efficiency
          },
          index) => (
            <tr>
              <td>{`${index + 1} ${name}`}</td>
              <td>{ TotalPoints }</td>
              <td>{ TotalGames }</td>
              <td>{ TotalVictories }</td>
              <td>{ TotalDraws }</td>
              <td>{ TotalLooses }</td>
              <td>{ GoalsFavor }</td>
              <td>{ GoalsOwn }</td>
              <td>{ GoalsBalance }</td>
              <td>{ Efficiency }</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  </div>
);

export default Leaderboard;
