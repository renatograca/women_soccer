import * as Sequelize from 'sequelize';
import db from '.';
import Players from './players';

class Clubs extends Sequelize.Model {
  /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  public static associate() {
    // define association here
    // Clubs.belongsTo(Players, { foreignKey: 'club_id', as: 'playersclubs' });
    Clubs.belongsTo(Players, { foreignKey: 'club_id', as: 'playersclubs' });

    Players.hasMany(Clubs, {
      sourceKey: 'club_id',
      foreignKey: 'club_id',
      as: 'clubsplayers', // this determines the name in `associations`!
    });
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

Clubs.belongsTo(Players, { foreignKey: 'club_id', as: 'playersclubs' });

Players.hasMany(Clubs, {
  sourceKey: 'club_id',
  foreignKey: 'club_id',
  as: 'clubsplayers', // this determines the name in `associations`!
});

export default Clubs;
