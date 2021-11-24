import { Model, STRING } from 'sequelize';
import db from '.';

class Clubs extends Model {}

Clubs.init({
  clubName: STRING,
}, {
  sequelize: db.connection,
  modelName: 'clubs',
  timestamps: false,
  underscored: true,
});

export default Clubs;
