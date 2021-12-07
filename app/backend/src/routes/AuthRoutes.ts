import { Router } from 'express';
import Token from '../middlewares/Token';
import AuthController from '../controllers/AuthController';

const router = Router();

router.post('/auth', AuthController.authenticate);
router.get('/validate', Token.validateToken, AuthController.validate);

export default router;
