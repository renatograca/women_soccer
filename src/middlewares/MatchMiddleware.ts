import { Request, Response, NextFunction } from 'express';

import ClubsService from '../services/ClubsService';

class MatchMiddleware {
  async validateTeam(req: Request, res: Response, next: NextFunction) {
    const { homeTeam, awayTeam } = req.body;

    if (homeTeam === awayTeam) {
      return res.status(401).json('Can not have the same team as home and away!');
    }
    return next();
  }

  async validateExistingTeam(req: Request, res: Response, next: NextFunction) {
    const { homeTeam, awayTeam } = req.body;
    const existingTeam = await ClubsService.getAllClubs();
    const teamData = existingTeam.map((team) => team.toJSON().id);
    if (homeTeam !== teamData || awayTeam !== teamData) {
      return res.status(401).json('There is no team with such id!');
    }
    return next();
  }

  // async validateHomeAndAwayTeam(req: Request, res: Response, next: NextFunction) {
  //   const { homeTeam, awayTeam } = req.body;

  //   if (!id) {
  //     return res.status(401).json('There is no team with such id!');
  //   }
  //   return next();
  // }
}

export default new MatchMiddleware();
