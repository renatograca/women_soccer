import * as Sequelize from 'sequelize';
import db from '.';

class Clubs extends Sequelize.Model {
  /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  static associate() {
    // define association here
  }
}
Clubs.init({
  club_name: Sequelize.STRING,
}, {
  sequelize: db.connection,
  modelName: 'clubs',
  timestamps: false,
});

export default Clubs;
