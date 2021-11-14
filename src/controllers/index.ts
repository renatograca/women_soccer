import { Request, Response } from 'express';
import UserService from '../services';

class UserController {
  public static getUserProfileData(req: Request, res: Response) {
    const data = UserService.userProfileData();
    res.send(data).status(200);
  }
}

export default UserController;
