import * as jwt from 'jsonwebtoken';
import 'dotenv/config';
import { NextFunction, Request, Response } from 'express';
import UserModel from '../database/models/UsersModel';

class Token {
  secret!: string;

  constructor() {
    this.secret = process.env.SECRET || 'super_senha';
  }

  public createToken = (user: object) => {
    try {
      const token = jwt.sign(user, this.secret);

      return token;
    } catch (error) {
      return error;
    }
  };

  public validateToken = (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization || 'vazio';

      jwt.verify(token, this.secret);

      return next();
    } catch (error) {
      return res.status(400).json({ message: 'Token not found' });
    }
  };

  public roleToken = (token: string) => {
    try {
      const { dataValues }: any = jwt.verify(token, this.secret) || { dataValues: '' };

      return dataValues;
    } catch (error) {
      return error;
    }
  };

  public async getUser(email:string) {
    const user = await UserModel.findOne({ where: { email } });
    return user;
  }
}
export default new Token();
