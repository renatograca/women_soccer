export const resultC1 = `
SUM(CASE
  WHEN club_1_goals > club_2_goals THEN 3
  WHEN club_1_goals < club_2_goals THEN 0
  WHEN club_1_goals = club_2_goals THEN 1
END)`;

export const gamesC1 = 'SUM(1)';

export const victoriesC1 = `
SUM(CASE
  WHEN club_1_goals > club_2_goals THEN 1
  WHEN club_1_goals < club_2_goals THEN 0
END)`;

export const drawsC1 = `
SUM(CASE
  WHEN club_1_goals = club_2_goals THEN 1
  WHEN club_1_goals <> club_2_goals THEN 0
END)`;

export const loosesC1 = `SUM(CASE
  WHEN club_1_goals < club_2_goals THEN 1
  WHEN club_1_goals > club_2_goals THEN 0
END)`;
export const goalsC1 = 'SUM(club_1_goals)';
export const goalsOwnC1 = 'SUM(club_2_goals)';

export const resultC2 = `
SUM(CASE
  WHEN club_2_goals > club_1_goals THEN 3
  WHEN club_2_goals < club_1_goals THEN 0
  WHEN club_2_goals = club_1_goals THEN 1
END)`;

export const gamesC2 = 'SUM(1)';

export const victoriesC2 = `
SUM(CASE
  WHEN club_2_goals > club_1_goals THEN 1
  WHEN club_2_goals < club_1_goals THEN 0
END)`;

export const drawsC2 = `
SUM(CASE
  WHEN club_2_goals = club_1_goals THEN 1
  WHEN club_2_goals <> club_1_goals THEN 0
END)`;

export const loosesC2 = `SUM(CASE
  WHEN club_2_goals < club_1_goals THEN 1
  WHEN club_2_goals > club_1_goals THEN 0
END)`;
export const goalsC2 = 'SUM(club_2_goals)';
export const goalsOwnC2 = 'SUM(club_1_goals)';
