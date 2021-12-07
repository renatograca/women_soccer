import {
  Request as Req,
  Response as Res,
  NextFunction as Next,
} from 'express';

import ClubsService from '../services/ClubsService';
import MatchesService from '../services/MatchesService';

class MatchMiddleware {
  async validateUpdate(req: Req, res: Res, next: Next) {
    const { inProgress } = req.body;
    const match = await MatchesService.getAllMatches();
    const isMatchInProgress = match.some((item) => item.inProgress === inProgress);
    if (isMatchInProgress === false) {
      return res.status(401).json('This match is over!');
    }
    return next();
  }

  validateQuantityGoals(req: Req, res: Res, next: Next) {
    const { homeTeamGoals, awayTeamGoals } = req.body;
    if (homeTeamGoals < 0 || awayTeamGoals < 0) {
      return res.status(401).json({ message: 'invalid quantity' });
    }
    return next();
  }

  async validateTeam(req: Req, res: Res, next: Next) {
    const { homeTeam, awayTeam } = req.body;

    if (homeTeam === awayTeam) {
      return res.status(401).json('Can not have the same team as home and away!');
    }
    return next();
  }

  async validateExistingTeam(req: Req, res: Res, next: Next) {
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

  async validateRepeatedMatch(req: Req, res: Res, next: Next) {
    try {
      const { homeTeam, awayTeam } = req.body;
      const matchId = await MatchesService.findMatchIdByTeams(homeTeam, awayTeam);
      const findExistingMatch = matchId.some((item) => item.id);
      if (findExistingMatch) {
        return res.status(401).json('This match already happened!');
      }
      return next();
    } catch (error) {
      return error;
    }
  }
}

export default new MatchMiddleware();
