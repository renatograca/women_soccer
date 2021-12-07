// import { NextFunction, Request, Response } from 'express';
// import UserModel from '../database/models/UsersModel';

// class UserMiddleware {
//   async validateExistingFields(req: Request, res: Response, next: NextFunction) {
//     const {
//       username,
//       role,
//       email,
//       password,
//     } = req.body;
//     if (!username || !role || !email || !password) {
//       return res.status(401).json('Must have all fields!');
//     }
//     return next();
//   }

//   // async validateFieldsFormats(req: Request, res: Response, next: NextFunction) {
//   //   const {
//   //     username,
//   //     role,
//   //     email,
//   //     password,
//   //   } = req.body;
//   //   if (
//   //     typeof username !== 'string'
//   //     || typeof role !== 'string'
//   //     || typeof email !== 'string'
//   //     || typeof password !== 'string'
//   //   ) {
//   //     return res.status(401).json('Fields must be strings!');
//   //   }
//   //   return next();
//   // }

//   // async validateEmail(req: Request, res: Response, next: NextFunction) {
//   //   const { email } = req.body;
//   //   const checkUser = await UserModel.findAll();
//   //   const checkEmail = checkUser.some((item) => item.email === email);

//   //   if (checkEmail) {
//   //     return res.status(409).json('User already exists!');
//   //   }
//   //   return next();
//   // }
// }

// export default new UserMiddleware();
