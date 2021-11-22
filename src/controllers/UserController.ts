import { Request, Response } from 'express';
import { hashSync } from 'bcryptjs';
import UserService from '../services/UserService';

class UserController {
  public static async createNewUser(req: Request, res: Response) {
    const {
      username,
      role,
      email,
      password,
    } = req.body;

    const passwordHash = hashSync(password, 8);

    const user = await UserService.createUser(username, role, email, passwordHash);

    const checkUser = await UserService.getOneUser(email);

    if (checkUser) {
      return res.status(409);
    }

    return res.status(200).json(user);
  }
}

export default UserController;
