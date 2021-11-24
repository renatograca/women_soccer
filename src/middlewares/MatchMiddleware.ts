import { Request, Response, NextFunction } from 'express';

import ClubsService from '../services/ClubsService';
import MatchesService from '../services/MatchesService';

class MatchMiddleware {
  async validateTeam(req: Request, res: Response, next: NextFunction) {
    const { homeTeam, awayTeam } = req.body;

    if (homeTeam === awayTeam) {
      return res.status(401).json('Can not have the same team as home and away!');
    }
    return next();
  }

  async validateExistingTeam(req: Request, res: Response, next: NextFunction) {
    try {
      const { homeTeam, awayTeam } = req.body;
      const existingTeam = await ClubsService.getAllClubs();
      const homeTeamExists = existingTeam.some((team) => team.id === homeTeam);
      const awayTeamExists = existingTeam.some((team) => team.id === awayTeam);
      if (!homeTeamExists || !awayTeamExists) {
        return res.status(401).json('There is no team with such id!');
      }
      return next();
    } catch (error) {
      return error;
    }
  }

  async validateRepeatedMatch(req: Request, res: Response, next: NextFunction) {
    try {
      const { homeTeam, awayTeam } = req.body;
      const matchHistory = await MatchesService.getAllMatches();
      const homeTeamHistory = matchHistory.some((team) => team.homeTeam === homeTeam);
      const awayTeamHistory = matchHistory.some((team) => team.awayTeam === awayTeam);
      if (homeTeamHistory && awayTeamHistory) {
        return res.status(401).json('This match already happened!');
      }
      return next();
    } catch (error) {
      return error;
    }
  }
}

export default new MatchMiddleware();
