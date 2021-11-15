import * as Sequelize from 'sequelize';
import db from '.';

class players extends Sequelize.Model {
  /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  static associate() {
    // define association here
  }
}
players.init({
  player_name: Sequelize.STRING,
  club_id: Sequelize.NUMBER,
}, {
  sequelize: db.connection,
  modelName: 'players',
  timestamps: false,
});

export default players;
