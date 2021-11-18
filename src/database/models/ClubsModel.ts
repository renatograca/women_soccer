import { Model, STRING } from 'sequelize';
import db from '.';
// import Players from './players';

class Clubs extends Model {}

Clubs.init({
  club_name: STRING,
}, {
  sequelize: db.connection,
  modelName: 'clubs',
  timestamps: false,
});

export default Clubs;
