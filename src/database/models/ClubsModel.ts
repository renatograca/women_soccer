import { Model, STRING } from 'sequelize';
import db from '.';
import Players from './PlayersModel';

class Clubs extends Model {}

Clubs.init({
  club_name: STRING,
}, {
  sequelize: db.connection,
  modelName: 'clubs',
  timestamps: false,
});

Players.belongsTo(Clubs, { foreignKey: 'club_id', as: 'club' });

Clubs.hasMany(Players, {
  foreignKey: 'id',
  as: 'player',
});

export default Clubs;
