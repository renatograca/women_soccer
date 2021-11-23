import { Router } from 'express';

import MathcesController from '../controllers/matches.controller';

import MatchMiddleware from '../middlewares/match.middleware';

const router = Router();

router.post('/matches', MatchMiddleware.validateTeam, MathcesController.createNewMatch);
router.get('/matches', MathcesController.getAllMatches);
router.get('/matches/:id', MathcesController.getOneMatch);
router.get('/result', MathcesController.result);

export default router;
