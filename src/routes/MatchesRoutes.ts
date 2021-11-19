import { Router } from 'express';
import MathcesController from '../controllers/MatchesController';

const router = Router();

router.get('/matches', MathcesController.getAllMetches);
router.get('/matches/:id', MathcesController.getOneMatch);

export default router;
