import * as Sequelize from 'sequelize';
import Matches from './matches';
import db from '.';

class Goals extends Sequelize.Model {
  /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  static associate() {
    // define association here
    Goals.belongsTo(Matches, {
      foreignKey: 'match_id',
      as: 'matches',
    });
  }
}
Goals.init({
  match_id: Sequelize.INTEGER,
  player_id: Sequelize.INTEGER,
}, {
  sequelize: db.connection,
  modelName: 'goals',
  timestamps: false,
});
export default Goals;
