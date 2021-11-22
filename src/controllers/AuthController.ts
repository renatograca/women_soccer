import { Request, Response } from 'express';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import UserService from '../services/UserService';

class AuthController {
  public static async authenticate(req: Request, res: Response) {
    const { email, password } = req.body;
    const user = await UserService.getOneUser(email);

    if (!user) {
      return res.sendStatus(401);
    }

    const isValidPassword = await compare(password, user.dataValues.password);

    if (!isValidPassword) {
      return res.sendStatus(401);
    }

    const token = sign({ id: user.dataValues.id }, 'secret', { expiresIn: '1d' });

    return res.json({
      user,
      token,
    });
  }
}

export default AuthController;
