import { Request, Response } from 'express';
import MatchesService from '../services/matches';

class MatchesController {
  public static async getAllMetches(req: Request, res: Response) {
    const matches = await MatchesService.getAllMatches();
    return res.status(200).json(matches);
  }
}

export default MatchesController;
