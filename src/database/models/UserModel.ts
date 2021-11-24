import { Model, STRING } from 'sequelize';
import db from '.';

class Users extends Model {
}

Users.init({
  username: STRING,
  role: STRING,
  email: STRING,
  password: STRING,
}, {
  timestamps: false,
  sequelize: db.connection,
  modelName: 'users',
  underscored: true,
});

export default Users;
