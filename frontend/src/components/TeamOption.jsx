import React from 'react';
import PropTypes from 'prop-types';

const ClubOption = ({ teams, homeTeam }) => (
  <label htmlFor={ (homeTeam) ? 'home-team-scoreboard' : 'away-team-scoreboard' }>
    { (homeTeam) ? 'Time Mandante' : 'Time Visitante' }
    <select>
      {
        teams.map(({ id, clubName }) => (
          <option key={ id }>{ clubName }</option>
        ))
      }
    </select>
  </label>
);

ClubOption.propTypes = {
  teams: PropTypes.arrayOf(PropTypes.object).isRequired,
  homeTeam: PropTypes.bool.isRequired,
};

export default ClubOption;
