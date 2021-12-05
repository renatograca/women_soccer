import { Request, Response } from 'express';
import ClubsService from '../services/ClubsService';

export default class ClubsController {
  public static async getAllClubs(req: Request, res: Response) {
    const data = await ClubsService.getAllClubs();

    return res.status(200).json(data);
  }

  public static async getOneClub(req: Request, res: Response) {
    const { id } = req.params;
    console.log(id, 'controler');

    const player = await ClubsService.getOneClub(Number(id));

    return res.status(200).json(player);
  }
}
