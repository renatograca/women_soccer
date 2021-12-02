import { Router } from 'express';
import Token from '../middlewares/Token';

import MatchesController from '../controllers/MatchesController';

import MatchMiddleware from '../middlewares/MatchMiddleware';

const router = Router();

router.post(
  '/matches',
  Token.validateToken,
  MatchMiddleware.validateExistingTeam,
  MatchMiddleware.validateTeam,
  MatchMiddleware.validateRepeatedMatch,
  MatchesController.createNewMatch,
);
router.get('/matches', MatchesController.getAllMatches);
router.patch('/matches', MatchesController.finishMatch);
router.get('/matches/progress', MatchesController.matchesInProgress);
router.get('/matches/:id', MatchesController.getOneMatch);
router.patch('/matches/:id', MatchMiddleware.validateQuantityGoals, MatchesController.updateMatch);
router.get('/result', MatchesController.result);
// router.put('/matches/:id', MatchesController.updateMatch);

export default router;
