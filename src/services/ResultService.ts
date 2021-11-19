import { literal } from 'sequelize';
import Matches from '../database/models/MatchesModel';

const query = `
club_id_1,
SUM(CASE
  WHEN club_1_goals > club_2_goals THEN 3
  WHEN club_1_goals < club_2_goals THEN 0
  WHEN club_1_goals = club_2_goals THEN 1
END) AS result_c1,
SUM(1) as games_c1,
SUM(CASE
  WHEN club_1_goals > club_2_goals THEN 1
  WHEN club_1_goals < club_2_goals THEN 0
END) AS victories_c1,
SUM(CASE
  WHEN club_1_goals = club_2_goals THEN 1
  WHEN club_1_goals <> club_2_goals THEN 0
END) AS draws_c1,
SUM(CASE
  WHEN club_1_goals < club_2_goals THEN 1
  WHEN club_1_goals > club_2_goals THEN 0
END) AS looses_c1,
SUM(club_1_goals) AS goals_c1,
SUM(club_2_goals) AS goals_own_c1`;

class ResultService {
  async result() {
    const matches = await Matches.findAll({
      attributes: [
        [literal(query), 'matches'],
      ],
      group: ['club_id_1'],
      subQuery: true,
    });
    return matches;
  }
}

export default new ResultService();
