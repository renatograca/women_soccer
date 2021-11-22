import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import MatchService from '../services/MatchesService';

const secret = '123456';

export default async (req: Request, res: Response, next: NextFunction) => {
  const { id: matchId } = req.params;
  const token = req.body.authorization;

  const { id, role } = verify(token, secret);

  const { userId } = MatchService.getOneMatch(Number(matchId));

  if (role !== 'admin' || !id === userId) {
    return res.status(401).json('User without permission!');
  }

  return next();
};
