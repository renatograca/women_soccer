export const resultC1 = `
SUM(CASE
  WHEN homeTeamGoals > awayTeamGoals THEN 3
  WHEN homeTeamGoals < awayTeamGoals THEN 0
  WHEN homeTeamGoals = awayTeamGoals THEN 1
END)`;

export const gamesC1 = 'SUM(1)';

export const victoriesC1 = `
SUM(CASE
  WHEN homeTeamGoals > awayTeamGoals THEN 1
  WHEN homeTeamGoals < awayTeamGoals THEN 0
END)`;

export const drawsC1 = `
SUM(CASE
  WHEN homeTeamGoals = awayTeamGoals THEN 1
  WHEN homeTeamGoals <> awayTeamGoals THEN 0
END)`;

export const defeatsC1 = `SUM(CASE
  WHEN homeTeamGoals < awayTeamGoals THEN 1
  WHEN homeTeamGoals > awayTeamGoals THEN 0
END)`;
export const goalsC1 = 'SUM(homeTeamGoals)';
export const ownGoalsC1 = 'SUM(awayTeamGoals)';

export const resultC2 = `
SUM(CASE
  WHEN awayTeamGoals > homeTeamGoals THEN 3
  WHEN awayTeamGoals < homeTeamGoals THEN 0
  WHEN awayTeamGoals = homeTeamGoals THEN 1
END)`;

export const gamesC2 = 'SUM(1)';

export const victoriesC2 = `
SUM(CASE
  WHEN awayTeamGoals > homeTeamGoals THEN 1
  WHEN awayTeamGoals < homeTeamGoals THEN 0
END)`;

export const drawsC2 = `
SUM(CASE
  WHEN awayTeamGoals = homeTeamGoals THEN 1
  WHEN awayTeamGoals <> homeTeamGoals THEN 0
END)`;

export const defeatsC2 = `SUM(CASE
  WHEN awayTeamGoals < homeTeamGoals THEN 1
  WHEN awayTeamGoals > homeTeamGoals THEN 0
END)`;
export const goalsC2 = 'SUM(awayTeamGoals)';
export const ownGoalsC2 = 'SUM(homeTeamGoals)';
