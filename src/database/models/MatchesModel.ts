import { Model, INTEGER } from 'sequelize';
import db from '.';

class Matches extends Model {}

Matches.init({
  homeTeam: INTEGER,
  homeTeamGoals: INTEGER,
  awayTeam: INTEGER,
  awayTeamGoals: INTEGER,
}, {
  underscored: true,
  sequelize: db.connection,
  modelName: 'matches',
  timestamps: false,
});
export default Matches;
