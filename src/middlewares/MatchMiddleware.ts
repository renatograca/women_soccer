import { Request, Response, NextFunction } from 'express';

class MatchMiddleware {
  async validateTeam(req: Request, res: Response, next: NextFunction) {
    const { homeTeam, awayTeam } = req.body;

    if (homeTeam === awayTeam) {
      return res.status(401).json('Can not have the same team as home and away!');
    }
    return next();
  }
}

export default new MatchMiddleware();
