import Users from '../database/models/UsersModel';

interface IUserData {
  name: string;
  id: number;
}
interface IUserService {
  userProfileData(): IUserData;
}
class UserService implements IUserService {
  public userProfileData(): IUserData {
    return {
      name: 'renato',
      id: 1820,
    };
  }

  async createUser(
    username: string,
    role: string,
    email: string,
    password: string,
  ): Promise<any> {
    try {
      const user = Users.create({
        username,
        role,
        email,
        password,
      });
      return user;
    } catch (error) {
      return error;
    }
  }

  async getAllUsers() {
    const users = await Users.findAll();
    return users;
  }

  async getOneUser(email: string): Promise<any> {
    try {
      const users = await Users.findOne({
        where: { email },
      });
      return users;
    } catch (error) {
      return error;
    }
  }
}
export default new UserService();
