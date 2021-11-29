import React, { useState, useEffect } from 'react';
import requestData from '../services/requests';
import TeamOptions from '../components/TeamOption';
import Scoreboard from '../components/Scoreboard';
import '../styles/pages/matchSettings.css';

const MatchSettings = () => {
  const [clubs, setClubs] = useState([]);
  // const [homeTeam, setHomeTeam] = useState('');
  const [homeTeamScoreboard, setHomeTeamScoreboard] = useState('0');
  // const [awayTeam, setAwayTeam] = useState('');
  const [awayTeamScoreboard, setAwayTeamScoreboard] = useState('0');

  useEffect(() => {
    const url = 'http://localhost:3001';
    const endpoint = '/clubs';

    if (!clubs.length) {
      requestData(url, endpoint)
        .then((response) => {
          setClubs(response);
        })
        .catch((error) => console.log(error));
    }
  });

  return (
    <>
      <h1>Adicionar/Alterar Partida</h1>
      <form className="match-settings-form">
        <TeamOptions
          teams={ clubs }
          homeTeam
        />
        <Scoreboard
          homeTeam
          score={ homeTeamScoreboard }
          setScore={ setHomeTeamScoreboard }
        />
        X
        <Scoreboard
          homeTeam={ false }
          score={ awayTeamScoreboard }
          setScore={ setAwayTeamScoreboard }
        />
        <TeamOptions
          teams={ clubs }
          homeTeam={ false }
        />
        <button type="button">Salvar</button>
        <button type="button">Finalizar</button>
      </form>
    </>
  );
};

export default MatchSettings;
