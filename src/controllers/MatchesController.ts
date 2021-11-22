import { Request, Response } from 'express';
// import Matches from '../database/models/MatchesModel';
import MatchesService from '../services/MatchesService';
import ResultService from '../services/ResultService';

class MatchesController {
  public static async createNewMatch(req: Request, res: Response) {
    try {
      const {
        homeTeam,
        homeTeamGoals,
        awayTeam,
        awayTeamGoals,
      } = req.body;

      const match = await MatchesService.createMatch(
        homeTeam,
        homeTeamGoals,
        awayTeam,
        awayTeamGoals,
      );

      return res.status(200).json(match);
    } catch (error) {
      return error;
    }
  }

  public static async getAllMatches(req: Request, res: Response) {
    const matches = await MatchesService.getAllMatches();
    return res.status(200).json(matches);
  }

  public static async getOneMatch(req: Request, res: Response) {
    const { id } = req.params;
    const match = await MatchesService.getOneMatch(Number(id));
    return res.status(200).json(match);
  }

  public static async result(req: Request, res: Response) {
    const matches = await ResultService.result();
    return res.status(200).json(matches);
  }
}

export default MatchesController;
