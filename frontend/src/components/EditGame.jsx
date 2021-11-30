import React from 'react';

export default function EditGame() {
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
        <button onClick={ () => createMatch(true) } type="button">Salvar</button>
        <button onClick={ () => finishMatch(false) } type="button">Finalizar</button>
      </form>
    </>
  );
}
