import { NextFunction, Request, Response } from 'express';
import UserService from '../services/UserService';

export default async (req: Request, res: Response, next: NextFunction) => {
  const { email } = req.body;
  const checkUser = await UserService.getAllUsers();
  const checkEmail = checkUser.some((item) => item.get({ plain: true }).email === email);

  if (checkEmail) {
    return res.status(409).json('User already exists!');
  }
  return next();
};
