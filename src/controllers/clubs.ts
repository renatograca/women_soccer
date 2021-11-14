import { Request, Response } from 'express';
import ClubsService from '../services/clubs';

export default class ClubsController {
  public static getAllClubs(req: Request, res: Response) {
    const data = ClubsService.getAllClubs();
    return res.status(200).send(data);
  }
}
