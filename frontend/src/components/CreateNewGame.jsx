import React from 'react';
import PropTypes from 'prop-types';

import TeamOptions from './TeamOption';
import Scoreboard from './Scoreboard';

const CreateNewGame = ({
  clubs,
  setClubs,
  getClub,
  homeTeamScoreboard,
  setHomeTeamScoreboard,
  awayTeamScoreboard,
  setAwayTeamScoreboard,
}) => (
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
      <button onClick={ () => createMatch(true) } type="button">Salvar</button>
      <button onClick={ () => finishMatch(false) } type="button">Finalizar</button>
    </form>
  </>
);

CreateNewGame.propTypes = ({
  clubs: PropTypes.arrayOf(PropTypes.object),
  setClubs: PropTypes.func,
  getClub: PropTypes.func,
  homeTeamScoreboard: PropTypes.string,
  setHomeTeamScoreboard: PropTypes.func,
  awayTeamScoreboard: PropTypes.string,
  setAwayTeamScoreboard: PropTypes.func,
}).isRequired;

export default CreateNewGame;
