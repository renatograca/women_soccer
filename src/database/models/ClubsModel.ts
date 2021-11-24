import { Model, STRING, INTEGER } from 'sequelize';
import db from '.';

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
    field: 'club_name',
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db.connection,
  modelName: 'clubs',
  timestamps: false,
});

export default Clubs;
