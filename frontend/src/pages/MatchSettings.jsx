import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CreateNewGame from '../components/CreateNewGame';
import EditGame from '../components/EditGame';
import api, { requestData, setToken } from '../services/requests';
import '../styles/pages/matchSettings.css';

const MatchSettings = () => {
  const [clubs, setClubs] = useState([]);
  const [homeTeamScoreboard, setHomeTeamScoreboard] = useState('0');
  const [awayTeamScoreboard, setAwayTeamScoreboard] = useState('0');
  // const [homeTeam, setHomeTeam] = useState('');
  // const [awayTeam, setAwayTeam] = useState('');
  const [homeClub, setHomeClub] = useState('');
  const [awayClub, setAwayClub] = useState('');
  const location = useLocation();

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
    await api.post('/matches', body);
  };

  const updateMatch = async (id, updateGoals) => {
    await api.patch(`/matches/${id}`, { ...updateGoals });
  };
  const finishMatch = async (inProgress, homeTeamFinished, awayTeamFinished) => {
    const body = {
      inProgress,
      homeTeam: homeClub || homeTeamFinished,
      awayTeam: awayClub || awayTeamFinished,
    };
    await api.patch('/matches', body);
  };

  if (location.state.id) {
    const { id,
      homeClub: homeClubState,
      homeTeamGoals,
      awayClub: awayClubState,
      awayTeamGoals,
    } = location.state;
    return (
      <EditGame
        homeTeam={ [homeClubState] }
        awayTeam={ [awayClubState] }
        homeTeamGoals={ homeTeamGoals }
        awayTeamGoals={ awayTeamGoals }
        idMatch={ id }
        updateMatch={ updateMatch }
        finishMatch={ finishMatch }
        getClub={ getClub }
      />
    );
  }

  return (
    <CreateNewGame
      setHomeTeamScoreboard={ setHomeTeamScoreboard }
      setAwayTeamScoreboard={ setAwayTeamScoreboard }
      clubs={ clubs }
      getClub={ getClub }
      createMatch={ createMatch }
      finishMatch={ finishMatch }
    />
  );
};

export default MatchSettings;
