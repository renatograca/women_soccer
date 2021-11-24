import { Model, INTEGER, BOOLEAN } from 'sequelize';
import db from '.';

class Matches extends Model {
  public id!: number;

  public homeTeam!: number;

  public homeTeamGoals!: number;

  public awayTeam!: number;

  public awayTeamGoals!: number;

  public isMatchOver!: boolean;
}

Matches.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  homeTeam: {
    type: INTEGER,
    allowNull: false,
  },
  homeTeamGoals: {
    type: INTEGER,
    allowNull: false,
  },
  awayTeam: {
    type: INTEGER,
    allowNull: false,
  },
  awayTeamGoals: {
    type: INTEGER,
    allowNull: false,
  },
  isMatchOver: {
    type: BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
}, {
  underscored: true,
  sequelize: db.connection,
  modelName: 'matches',
  timestamps: false,
});
export default Matches;
