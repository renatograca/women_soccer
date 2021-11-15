import * as Sequelize from 'sequelize';
import db from '.';

class goals extends Sequelize.Model {
  /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  static associate() {
    // define association here
  }
}
goals.init({
  match_id: Sequelize.NUMBER,
  player_id: Sequelize.NUMBER,
}, {
  sequelize: db.connection,
  modelName: 'goals',
  timestamps: false,
});
export default goals;
