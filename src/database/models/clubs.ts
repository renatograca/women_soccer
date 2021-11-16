import * as Sequelize from 'sequelize';
import db from '.';
import Players from './players';

class Clubs extends Sequelize.Model {
  /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  static associate() {
    // define association here
    Players.belongsTo(Clubs, { targetKey: 'club_id' });
  }
}
Clubs.init({
  club_id: Sequelize.INTEGER,
  club_name: Sequelize.STRING,
}, {
  sequelize: db.connection,
  modelName: 'clubs',
  timestamps: false,
});

export default Clubs;
