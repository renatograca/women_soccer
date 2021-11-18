import { Request, Response } from 'express';
import PlayersService from '../services/PlayersService';

export default class PlayersController {
  public static async getAllPlayers(req:Request, res:Response) {
    const players = await PlayersService.getAllPlayers();
    return res.status(200).json(players);
  }

  public static async getOnePlayer(req: Request, res: Response) {
    const { id } = req.params;
    const player = await PlayersService.getOnePlayer(Number(id));

    return res.status(200).json(player);
  }
}
