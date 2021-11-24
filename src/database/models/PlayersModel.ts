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
  sequelize: db.connection,
  modelName: 'players',
  timestamps: false,
  underscored: true,
});
Players.belongsTo(Clubs, { foreignKey: 'club_id', as: 'club' });

Clubs.hasMany(Players, {
  foreignKey: 'id',
  as: 'player',
});

export default Players;
