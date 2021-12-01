import React from 'react';
import PropTypes from 'prop-types';

const ClubOption = ({ teams, homeTeam, getClub }) => (
  <label htmlFor={ (homeTeam) ? 'home-team-scoreboard' : 'away-team-scoreboard' }>
    { (homeTeam) ? 'Time Mandante' : 'Time Visitante' }
    <select
      onClick={ ({ target: { value } }) => {
        const homeOrAway = (homeTeam) ? 'homeClub' : 'awayClub';
        getClub(value, homeOrAway);
      } }
    >
      {
        teams.map(({ clubName }, index) => (
          <option key={ index }>{ clubName }</option>
        ))
      }
    </select>
  </label>
);

ClubOption.propTypes = {
  teams: PropTypes.arrayOf(PropTypes.object).isRequired,
  homeTeam: PropTypes.bool.isRequired,
  getClub: PropTypes.func.isRequired,
};

export default ClubOption;
