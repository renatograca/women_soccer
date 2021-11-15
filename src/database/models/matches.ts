import * as Sequelize from 'sequelize';
import db from '.';

class matches extends Sequelize.Model {
  /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  static associate() {
    // define association here
  }
}
matches.init({
  club_id_1: Sequelize.NUMBER,
  club_id_2: Sequelize.NUMBER,
  match_round: Sequelize.NUMBER,
}, {
  sequelize: db.connection,
  modelName: 'matches',
  timestamps: false,
});
export default matches;
