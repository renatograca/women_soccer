import { Model, STRING } from 'sequelize';
import db from '.';

class Clubs extends Model {}

Clubs.init({
  clubName: STRING,
}, {
  underscored: true,
  sequelize: db.connection,
  modelName: 'clubs',
  timestamps: false,
});

export default Clubs;
