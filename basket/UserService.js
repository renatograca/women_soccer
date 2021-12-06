// import Users from '../database/models/UsersModel';

// class UserService {
//   async createUser(
//     username: string,
//     role: string,
//     email: string,
//     password: string,
//   ): Promise<any> {
//     try {
//       const user = Users.create({
//         username,
//         role,
//         email,
//         password,
//       });
//       return user;
//     } catch (error) {
//       return error;
//     }
//   }

//   // async getAllUsers() {
//   //   const users = await Users.findAll({ raw: true });
//   //   return users;
//   // }

//   // async getOneUser(email: string): Promise<any> {
//   //   try {
//   //     const users = await Users.findOne({
//   //       raw: true,
//   //       where: { email },
//   //     });
//   //     return users;
//   //   } catch (error) {
//   //     return error;
//   //   }
//   // }
// }
// export default new UserService();
