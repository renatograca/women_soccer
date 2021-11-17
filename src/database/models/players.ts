import * as Sequelize from 'sequelize';
import db from '.';
import Clubs from './clubs';

class Players extends Sequelize.Model {}

Players.init({
  player_name: Sequelize.STRING,
  club_id: Sequelize.INTEGER,
}, {
  sequelize: db.connection,
  modelName: 'players',
  timestamps: false,
});
Players.belongsTo(Clubs, { foreignKey: 'club_id', as: 'club' });

Clubs.hasMany(Players, {
  foreignKey: 'id',
  as: 'player',
});

export default Players;
