import * as Sequelize from 'sequelize';
import db from '.';
import Clubs from './clubs';

class Players extends Sequelize.Model {
  /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  static associate() {
    // define association here
    Clubs.hasMany(Players, {
      sourceKey: 'player_id',
      foreignKey: 'club_id',
      as: 'clubs', // this determines the name in `associations`!
    });
  }
}
Players.init({
  player_id: Sequelize.INTEGER,
  player_name: Sequelize.STRING,
  club_id: Sequelize.INTEGER,
}, {
  sequelize: db.connection,
  modelName: 'players',
  timestamps: false,
});

export default Players;
