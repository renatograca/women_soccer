import * as Sequelize from 'sequelize';
import db from '.';

class User extends Sequelize.Model {}

User.init({
  name: Sequelize.STRING,
  role: Sequelize.STRING,
  email: Sequelize.STRING,
  senha: Sequelize.STRING,
}, {
  sequelize: db.connection,
  modelName: 'user',
});

export default User;
