import React, { useState } from 'react';
import PropTypes from 'prop-types';

import TeamOptions from './TeamOption';
import Scoreboard from './Scoreboard';

const EditGame = ({
  homeTeam,
  awayTeam,
  homeTeamGoals,
  awayTeamGoals,
  idMatch,
  updateMatch,
  finishMatch,
  getClub,
}) => {
  const [currentHomeTeamGoals, setHomeTeamGoals] = useState(homeTeamGoals);
  const [currentAwayTeamGoals, setAwayTeamGoals] = useState(awayTeamGoals);
  return (
    <>
      <h1 className="match-settings">Alterar Partida</h1>
      <form className="match-settings-form">
        <TeamOptions
          teams={ homeTeam }
          homeTeam
          getClub={ getClub }
        />
        <Scoreboard
          homeTeam
          score={ currentHomeTeamGoals }
          setScore={ setHomeTeamGoals }
          qtyGoal={ homeTeamGoals }
        />
        X
        <Scoreboard
          homeTeam={ false }
          score={ currentAwayTeamGoals }
          setScore={ setAwayTeamGoals }
          qtyGoal={ awayTeamGoals }
        />
        <TeamOptions
          teams={ awayTeam }
          homeTeam={ false }
          getClub={ getClub }
        />
        <button
          onClick={ () => updateMatch(idMatch,
            {
              homeTeamGoals: currentHomeTeamGoals,
              awayTeamGoals: currentAwayTeamGoals,
            }) }
          type="button"
        >
          Editar

        </button>
        <button onClick={ () => finishMatch(false) } type="button">Finalizar</button>
      </form>
    </>
  );
};

EditGame.propTypes = ({
  homeTeam: PropTypes.any,
  awayTeam: PropTypes.any,
  homeTeamGoals: PropTypes.any,
  awayTeamGoals: PropTypes.any,
  idMatch: PropTypes.any,
  getClub: PropTypes.any,
  finishMatc: PropTypes.any,
  updateMatch: PropTypes.any,
}).isRequired;

export default EditGame;
