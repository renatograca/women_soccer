import { Model, STRING, INTEGER } from 'sequelize';
import db from '.';

class Clubs extends Model {
  public id!: number;

  public clubName!: string;
}

Clubs.init({
  id: {
    type: INTEGER,
    allowNull: true,
    primaryKey: true,
    autoIncrement: true,
  },
  clubName: STRING,
}, {
  underscored: true,
  sequelize: db.connection,
  modelName: 'clubs',
  timestamps: false,
});

export default Clubs;
