import { Request, Response } from 'express';
import PlayersService from '../services/PlayersService';

export default class PlayersController {
  public static async getAllPlayers(req:Request, res:Response) {
    const players = await PlayersService.getAllPlayers();
    return res.status(200).json(players);
  }

  public static async gatPlayerForClub(req: Request, res: Response) {
    const { clubName } = req.params;
    const player = await PlayersService.gatPlayerForClub(clubName);

    return res.status(200).json(player);
  }
}
