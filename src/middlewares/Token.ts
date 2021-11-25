import * as jwt from 'jsonwebtoken';
import 'dotenv/config';
import { NextFunction, Request, Response } from 'express';

class Token {
  secret!: string;

  constructor() {
    this.secret = process.env.SECRET || 'super_senha';
  }

  public createToken(user: object) {
    try {
      console.log(this.secret);

      const token = jwt.sign(user, this.secret);
      return token;
    } catch (error) {
      return error;
    }
  }

  public validateToken(req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.headers.authorization || 'vazio';
      jwt.verify(token, this.secret);

      return next();
    } catch (error) {
      console.log(error);

      return error;
    }
  }
}
export default new Token();
