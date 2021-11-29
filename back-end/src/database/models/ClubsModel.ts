import { Model, STRING, INTEGER } from 'sequelize';
import db from '.';
import Matches from './MatchesModel';

class Clubs extends Model {
  public id!: number;

  public clubName!: string;
}

Clubs.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  clubName: {
    type: STRING,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db.connection,
  modelName: 'clubs',
  timestamps: false,
});

Matches.belongsTo(Clubs, { foreignKey: 'homeTeam', as: 'homeClub' });
Matches.belongsTo(Clubs, { foreignKey: 'awayTeam', as: 'awayClub' });

Clubs.hasMany(Matches, { foreignKey: 'id', as: 'homeMatch' });
Clubs.hasMany(Matches, { foreignKey: 'id', as: 'awayMatch' });

export default Clubs;
