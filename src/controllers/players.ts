import { Request, Response } from 'express';
import PlayersService from '../services/players';

export default class PlayersController {
  public static async getAllPlayers(req:Request, res:Response) {
    const players = await PlayersService.getAllPlayers();
    return res.status(200).json(players);
  }
}
