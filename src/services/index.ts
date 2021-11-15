interface IUserData {
  name: string,
  id: number
 }
 interface IUserService {
  userProfileData() : IUserData
 }
class UserService implements IUserService {
  public userProfileData() : IUserData {
    return {
      name: 'renato',
      id: 1820,
    };
  }
}
export default new UserService();
