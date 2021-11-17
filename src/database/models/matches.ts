import * as Sequelize from 'sequelize';
import db from '.';

class Matches extends Sequelize.Model {}

Matches.init({
  club_id_1: Sequelize.INTEGER,
  club_id_2: Sequelize.INTEGER,
}, {
  sequelize: db.connection,
  modelName: 'matches',
  timestamps: false,
});
export default Matches;
