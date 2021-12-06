import { Request, Response } from 'express';

import MatchesService from '../services/MatchesService';
import ResultService from '../services/ResultService';

class MatchesController {
  public static async createNewMatch(req: Request, res: Response) {
    // try {
    const {
      homeTeam,
      homeTeamGoals,
      awayTeam,
      awayTeamGoals,
      inProgress,
    } = req.body;

    const match = await MatchesService.createMatch(
      homeTeam,
      homeTeamGoals,
      awayTeam,
      awayTeamGoals,
      inProgress,
    );

    return res.status(201).json(match);
    // } catch (error) {
    //   return error;
    // }
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

  // public static async matchesInProgress(req: Request, res: Response) {
  //   const { inProgress } = req.body;
  //   const matches = await MatchesService.matchesInProgress(inProgress);
  //   return res.status(200).json(matches);
  // }

  public static async updateMatch(req: Request, res: Response) {
    const { homeTeamGoals, awayTeamGoals } = req.body;
    const { id } = req.params;
    const matches = await MatchesService.updateMatch(+id, homeTeamGoals, awayTeamGoals);
    if (!matches) { return res.status(401).json({ message: 'Quantity goals invalid' }); }
    return res.status(200).json(matches);
  }

  public static async finishMatch(req: Request, res: Response) {
    const { inProgress, homeTeam, awayTeam } = req.body;

    const match = await MatchesService.finishMatch(inProgress, { homeTeam, awayTeam });
    if (!match) { return res.status(401).json({ message: 'Partida já finalizada' }); }
    return res.status(200).json(match);
  }
}

export default MatchesController;
