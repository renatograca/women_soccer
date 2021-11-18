import { Model, INTEGER } from 'sequelize';
import db from '.';

class Matches extends Model {}

Matches.init({
  club_id_1: INTEGER,
  club_1_goals: INTEGER,
  club_id_2: INTEGER,
  club_2_goals: INTEGER,
}, {
  sequelize: db.connection,
  modelName: 'matches',
  timestamps: false,
});
export default Matches;
