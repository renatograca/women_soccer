import { Request, Response, NextFunction } from 'express';
// import { verify } from 'jsonwebtoken';

// import MatchService from '../services/MatchesService';

// const secret = '123456';

// export default async (req: Request, res: Response, next: NextFunction) => {
//   const { id: matchId } = req.params;
//   const token = req.body.authorization;

//   const { id, role } = verify(token, secret);

//   const { userId } = MatchService.getOneMatch(Number(matchId));

//   if (role !== 'admin' || !id === userId) {
//     return res.status(401).json('User without permission!');
//   }

//   return next();
// };

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
