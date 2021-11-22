import { Router } from 'express';
import MathcesController from '../controllers/MatchesController';

const router = Router();

router.post('/matches', MathcesController.createNewMatch);
router.get('/matches', MathcesController.getAllMatches);
router.get('/matches/:id', MathcesController.getOneMatch);
router.get('/result', MathcesController.result);

export default router;
