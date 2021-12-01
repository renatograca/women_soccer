export const resultC1 = `
SUM(CASE
  WHEN home_team_goals > away_team_goals THEN 3
  WHEN home_team_goals < away_team_goals THEN 0
  WHEN home_team_goals = away_team_goals THEN 1
END)`;

export const gamesC1 = 'SUM(1)';

export const victoriesC1 = `
SUM(CASE
  WHEN home_team_goals > away_team_goals THEN 1
  WHEN home_team_goals < away_team_goals THEN 0
END)`;

export const drawsC1 = `
SUM(CASE
  WHEN home_team_goals = away_team_goals THEN 1
  WHEN home_team_goals <> away_team_goals THEN 0
END)`;

export const defeatsC1 = `SUM(CASE
  WHEN home_team_goals < away_team_goals THEN 1
  WHEN home_team_goals > away_team_goals THEN 0
END)`;
export const goalsC1 = 'SUM(home_team_goals)';
export const ownGoalsC1 = 'SUM(away_team_goals)';

export const resultC2 = `
SUM(CASE
  WHEN away_team_goals > home_team_goals THEN 3
  WHEN away_team_goals < home_team_goals THEN 0
  WHEN away_team_goals = home_team_goals THEN 1
END)`;

export const gamesC2 = 'SUM(1)';

export const victoriesC2 = `
SUM(CASE
  WHEN away_team_goals > home_team_goals THEN 1
  WHEN away_team_goals < home_team_goals THEN 0
END)`;

export const drawsC2 = `
SUM(CASE
  WHEN away_team_goals = home_team_goals THEN 1
  WHEN away_team_goals <> home_team_goals THEN 0
END)`;

export const defeatsC2 = `SUM(CASE
  WHEN away_team_goals < home_team_goals THEN 1
  WHEN away_team_goals > home_team_goals THEN 0
END)`;
export const goalsC2 = 'SUM(away_team_goals)';
export const ownGoalsC2 = 'SUM(home_team_goals)';
