import { Router } from 'express';

import MatchesController from '../controllers/MatchesController';

import MatchMiddleware from '../middlewares/MatchMiddleware';

const router = Router();

router.post(
  '/matches',
  MatchMiddleware.validateExistingTeam,
  MatchMiddleware.validateTeam,
  MatchMiddleware.validateRepeatedMatch,
  MatchesController.createNewMatch,
);
router.get('/matches', MatchesController.getAllMatches);
router.get('/matches/:id', MatchesController.getOneMatch);
router.get('/result', MatchesController.result);

export default router;
