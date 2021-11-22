import { Request, Response } from 'express';
import { hashSync } from 'bcryptjs';
import UserService from '../services/UserService';

class UserController {
  public static async createNewUser(req: Request, res: Response) {
    try {
      const {
        username,
        role,
        email,
        password,
      } = req.body;

      const passwordHash = hashSync(password, 8);

      const user = await UserService.createUser(
        username,
        role,
        email,
        passwordHash,
      );

      return res.status(200).json(user);
    } catch (error) {
      return error;
    }
  }
}

export default UserController;
