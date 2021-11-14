import { Request, Response } from 'express';
import ClubsService from '../services/clubs';

export default class ClubsController {
  public static async getAllClubs(req: Request, res: Response) {
    const data = await ClubsService.getAllClubs();

    return res.status(200).json(data);
  }
}
