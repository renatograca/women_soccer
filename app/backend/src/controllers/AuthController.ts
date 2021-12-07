import { Request, Response } from 'express';
import { compare } from 'bcryptjs';
import Token from '../middlewares/Token';
// import UserModel from '../database/models/UsersModel';

class AuthController {
  public static async authenticate(req: Request, res: Response) {
    const { email, password } = req.body;
    const user = await Token.getUser(email);

    if (!user) {
      return res.status(401).json('User does not exists!');
    }

    const isValidPassword = await compare(password, user.password);

    if (!isValidPassword) {
      return res.status(401).json('Invalid password!');
    }

    user.password = '';

    const token = await Token.createToken({
      ...user,
    });

    return res.status(200).json({
      user,
      token,
    });
  }

  public static validate(req: Request, res: Response) {
    const token = req.headers.authorization || 'vazio';

    const { role }: any = Token.roleToken(token);

    if (role !== 'admin') { return res.status(401).json({ message: 'acesso não permitido' }); }
    return res.status(200).json(role);
  }
}

export default AuthController;
