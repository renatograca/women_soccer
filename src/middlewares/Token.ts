import * as jwt from 'jsonwebtoken';
import 'dotenv/config';

class Token {
  private secret!: string;

  constructor() {
    this.secret = process.env.SECRETE || 'super_senha';
  }

  public createToken(user: object) {
    try {
      const token = jwt.sign(user, this.secret);
      return token;
    } catch (error) {
      return error;
    }
  }
}
export default new Token();
