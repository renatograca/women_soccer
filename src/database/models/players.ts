import * as Sequelize from 'sequelize';
import db from '.';
import Clubs from './clubs';

class Players extends Sequelize.Model {}

Players.init({
  player_id: Sequelize.INTEGER,
  player_name: Sequelize.STRING,
  club_id: Sequelize.INTEGER,
}, {
  sequelize: db.connection,
  modelName: 'players',
  timestamps: false,
});
Clubs.belongsTo(Players, { foreignKey: 'club_id', as: 'playersclubs' });

Players.hasMany(Clubs, {
  sourceKey: 'club_id',
  foreignKey: 'club_id',
  as: 'clubsplayers', // this determines the name in `associations`!
});

export default Players;
