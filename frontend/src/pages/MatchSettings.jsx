import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
import api, { requestData, setToken } from '../services/requests';
import TeamOptions from '../components/TeamOption';
import Scoreboard from '../components/Scoreboard';
import '../styles/pages/matchSettings.css';

const MatchSettings = () => {
  const [clubs, setClubs] = useState([]);
  // const [homeTeam, setHomeTeam] = useState('');
  const [homeTeamScoreboard, setHomeTeamScoreboard] = useState('0');
  // const [awayTeam, setAwayTeam] = useState('');
  const [awayTeamScoreboard, setAwayTeamScoreboard] = useState('0');
  const [homeClub, setHomeClub] = useState('');
  const [awayClub, setAwayClub] = useState('');
  // const location = useLocation();

  useEffect(() => {
    const endpoint = '/clubs';

    if (!clubs.length) {
      requestData(endpoint)
        .then((response) => {
          setClubs(response);
        })
        .catch((error) => console.log(error));
    }
  });

  const getClub = (club, homeOrAway) => {
    const { id } = clubs.find(({ clubName }) => clubName === club);
    if (homeOrAway === 'homeClub') { setHomeClub(id); } else { setAwayClub(id); }
  };

  const createMatch = async (inProgress) => {
    const body = {
      homeTeam: homeClub,
      awayTeam: awayClub,
      homeTeamGoals: +homeTeamScoreboard,
      awayTeamGoals: +awayTeamScoreboard,
      inProgress,
    };
    const user = JSON.parse(localStorage.getItem('user')) || { token: '' };
    setToken(user.token);
    // console.log(body, 'body');
    // console.log(user.token, 'user');
    /* const { data } = */ await api.post('/matches', body);
    // console.log(data, 'meu data');
  };

  const finishMatch = async (inProgress) => {
    const body = {
      inProgress,
      homeTeam: homeClub,
      awayTeam: awayClub,
    };
    /* const { data } = */ await api.patch('/matches', body);
  };

  return (
    <>
      <h1 className="match-settings">Adicionar/Alterar Partida</h1>
      <form className="match-settings-form">
        <TeamOptions
          teams={ clubs }
          setTeams={ setClubs }
          homeTeam
          getClub={ getClub }
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
          setTeams={ setClubs }
          homeTeam={ false }
          getClub={ getClub }
        />
        { }
        <button onClick={ () => createMatch(true) } type="button">Salvar</button>
        <button onClick={ () => finishMatch(false) } type="button">Finalizar</button>
      </form>
    </>
  );
};

export default MatchSettings;
