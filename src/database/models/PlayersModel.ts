import { Model, STRING, INTEGER } from 'sequelize';
import db from '.';
// import Clubs from './ClubsModel';

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

export default Players;
