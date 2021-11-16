import * as Sequelize from 'sequelize';
import db from '.';
import Clubs from './clubs';

class Players extends Sequelize.Model {
  /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  associate() {
    // define association here
    // Players.hasMany(Clubs, {
    //   sourceKey: 'club_id',
    //   foreignKey: 'club_id',
    //   as: 'clubsplayers', // this determines the name in `associations`!
    // });

    Players.belongsTo(Clubs, { foreignKey: 'club_id', as: 'playersclubs' });

    Clubs.hasMany(Players, {
      sourceKey: 'id',
      foreignKey: 'club_id',
      as: 'clubsplayers', // this determines the name in `associations`!
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
