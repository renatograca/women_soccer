import Users from '../database/models/UserModel';

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

  async getOneUser(email: string): Promise<any> {
    try {
      const users = await Users.findOne({
        where: { email },
        include: [{ model: Users, as: 'user' }],
      });
      return users;
    } catch (error) {
      return error;
    }
  }
}
export default new UserService();
