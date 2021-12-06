// import { Request, Response } from 'express';
// import { hashSync } from 'bcryptjs';
// import Token from '../middlewares/Token';

// class UserController {
// public static async createNewUser(req: Request, res: Response) {
//   try {
//     const {
//       username,
//       role,
//       email,
//       password,
//     } = req.body;

//     const passwordHash = hashSync(password, 8);

//     const user = await UserService.createUser(
//       username,
//       role,
//       email,
//       passwordHash,
//     );
//     const token = Token.createToken({
//       username: user.username, role: user.role, email: user.email,
//     });
//     return res.status(200).json({ user, token });
//   } catch (error) {
//     return error;
//   }
// }

// public static async getOneUser(req: Request, res: Response) {
//   const user = await UserService.getOneUser(req.body.email);
//   if (!user) { return res.status(401).json({ message: 'nao pode logar' }); }
//   delete user.password;
//   delete user.id;
//   const token = Token.createToken(user);
//   return res.status(200).json(token);
// }

//   public static validate(req: Request, res: Response) {
//     const token = req.headers.authorization || 'vazio';

//     const { role }: any = Token.roleToken(token);

//     if (role !== 'adm') { return res.status(401).json({ message: 'acesso não permitido' }); }
//     return res.status(200).json(role);
//   }
// }

// export default UserController;
