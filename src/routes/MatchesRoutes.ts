import { Router } from 'express';

import MathcesController from '../controllers/MatchesController';

import MatchMiddleware from '../middlewares/MatchMiddleware';

const router = Router();

router.post(
  '/matches',
  MatchMiddleware.validateExistingTeam,
  MatchMiddleware.validateTeam,
  MathcesController.createNewMatch,
);
router.get('/matches', MathcesController.getAllMatches);
router.get('/matches/:id', MathcesController.getOneMatch);
router.get('/result', MathcesController.result);

export default router;
