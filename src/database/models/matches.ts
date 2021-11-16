import * as Sequelize from 'sequelize';
import Goals from './goals';
import db from '.';

class Matches extends Sequelize.Model {
  /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  static associate() {
    // define association here
    Matches.hasMany(Goals);
  }
}
Matches.init({
  club_id_1: Sequelize.INTEGER,
  club_id_2: Sequelize.INTEGER,
  match_round: Sequelize.INTEGER,
}, {
  sequelize: db.connection,
  modelName: 'matches',
  timestamps: false,
});
export default Matches;
