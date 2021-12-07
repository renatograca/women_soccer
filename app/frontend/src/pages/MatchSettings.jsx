import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import CreateNewGame from '../components/CreateNewGame';
import EditGame from '../components/EditGame';
import Loading from '../components/Loading';
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
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const storage = JSON.parse(localStorage.getItem('user'));

      if (!storage) return navigate('/');

      const { token } = storage;

      setToken(token);
      api.get('/validate')
        .then(() => setIsAuthenticated(true))
        .catch(() => navigate('/'));
    })();
  }, [navigate]);

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
      homeTeam: +homeClub,
      awayTeam: +awayClub,
      homeTeamGoals: +homeTeamScoreboard,
      awayTeamGoals: +awayTeamScoreboard,
      inProgress,
    };
    console.log(body);
    const user = JSON.parse(localStorage.getItem('user')) || { token: '' };
    setToken(user.token);
    await api.post('/matches', body);
  };

  const updateMatch = async (id, updateGoals) => {
    await api.patch(`/matches/${id}`, { ...updateGoals });
  };
  const finishMatch = async (inProgress, teams = {}) => {
    const { homeTeamFinished = '', awayTeamFinished = '' } = teams;
    const { id: homeId } = clubs
      .find(({ clubName }) => clubName === homeTeamFinished) || { id: '' };
    const { id: awayId } = clubs
      .find(({ clubName }) => clubName === awayTeamFinished) || { id: '' };
    const body = {
      inProgress,
      homeTeam: homeClub || homeId,
      awayTeam: awayClub || awayId,
    };
    await api.patch('/matches', body);
  };

  if (!isAuthenticated) return <Loading />;

  if (location.state) {
    const { id,
      homeClub: homeClubState,
      homeTeamGoals,
      awayClub: awayClubState,
      awayTeamGoals,
    } = location.state;
    return (
      <>
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
        <Link to="/games">Ver Jogos</Link>
        <Link to="/leaderboard">Ver Classificação</Link>
      </>
    );
  }

  return (
    <>
      <CreateNewGame
        setHomeTeamScoreboard={ setHomeTeamScoreboard }
        setAwayTeamScoreboard={ setAwayTeamScoreboard }
        clubs={ clubs }
        getClub={ getClub }
        createMatch={ createMatch }
        finishMatch={ finishMatch }
      />
      <Link to="/games">Ver Jogos</Link>
      <Link to="/leaderboard">Ver Classificação</Link>
    </>
  );
};

export default MatchSettings;
