import { Request, Response } from 'express';
import { compare } from 'bcryptjs';
import Token from '../middlewares/Token';

import UserService from '../services/UserService';

class AuthController {
  public static async authenticate(req: Request, res: Response) {
    const { email, password } = req.body;
    const user = await UserService.getOneUser(email);

    if (!user) {
      return res.status(401).json('User does not exists!');
    }

    const isValidPassword = await compare(password, user.password);

    if (!isValidPassword) {
      return res.status(401).json('Invalid password!');
    }

    delete user.password;

    const token = Token.createToken({
      ...user,
    });

    return res.json({
      user,
      token,
    });
  }
}

export default AuthController;
