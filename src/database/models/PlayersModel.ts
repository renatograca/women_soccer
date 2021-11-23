import { Model, STRING, INTEGER } from 'sequelize';
import db from '.';
import Clubs from './ClubsModel';

class Players extends Model {}

Players.init({
  playerName: STRING,
  position: STRING,
  clubId: INTEGER,
  goals: INTEGER,
}, {
  underscored: true,
  sequelize: db.connection,
  modelName: 'players',
  timestamps: false,
});
Players.belongsTo(Clubs, { foreignKey: 'club_id', as: 'club' });

Clubs.hasMany(Players, {
  foreignKey: 'club_id',
  as: 'player',
});

export default Players;
