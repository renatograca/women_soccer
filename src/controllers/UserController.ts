import { Request, Response } from 'express';
import UserService from '../services/UserService';

class UserController {
  public static getUserProfileData(req: Request, res: Response) {
    const data = UserService.userProfileData();
    res.send(data).status(200);
  }

  public static async createNewUser(req: Request, res: Response) {
    const {
      username,
      role,
      email,
      password,
    } = req.body;
    const user = await UserService.createUser(username, role, email, password);
    return res.status(200).json(user);
  }
}

export default UserController;
