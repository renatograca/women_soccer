import { Model, INTEGER } from 'sequelize';
import db from '.';

class Matches extends Model {}

Matches.init({
  homeTeam: INTEGER,
  homeTeamGoals: INTEGER,
  awayTeam: INTEGER,
  awayTeamGoals: INTEGER,
}, {
  sequelize: db.connection,
  modelName: 'matches',
  timestamps: false,
  underscored: true,
});
export default Matches;
