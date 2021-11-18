import { Request, Response } from 'express';
import MatchesService from '../services/matches';

class MatchesController {
  public static async getAllMetches(req: Request, res: Response) {
    const matches = await MatchesService.getAllMatches();
    return res.status(200).json(matches);
  }

  public static async getOneMatch(req: Request, res: Response) {
    const { id } = req.params;
    const match = await MatchesService.getOneMatch(Number(id));
    return res.status(200).json(match);
  }
}

export default MatchesController;
