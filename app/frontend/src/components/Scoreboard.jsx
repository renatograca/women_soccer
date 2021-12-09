import React from 'react';
import PropTypes from 'prop-types';

const Scoreboard = ({ homeTeam, score, setScore, qtyGoal }) => (
  <label htmlFor={ (homeTeam) ? 'home-team-scoreboard' : 'away-team-scoreboard' }>
    Placar:
    <input
      type="number"
      min="0"
      value={ score }
      onChange={ ({ target: { value } }) => {
        if (value < qtyGoal) {
          setScore(qtyGoal);
        } else {
          setScore(value);
        }
      } }
    />
  </label>
);

Scoreboard.propTypes = {
  homeTeam: PropTypes.bool.isRequired,
  score: PropTypes.string.isRequired,
  setScore: PropTypes.func.isRequired,
  qtyGoal: PropTypes.string.isRequired,
};

export default Scoreboard;
