import * as Sequelize from 'sequelize';
import db from '.';
// import Players from './players';

class Clubs extends Sequelize.Model {}

Clubs.init({
  club_id: Sequelize.INTEGER,
  club_name: Sequelize.STRING,
}, {
  sequelize: db.connection,
  modelName: 'clubs',
  timestamps: false,
});

export default Clubs;
