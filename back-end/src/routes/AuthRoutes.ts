import { Router } from 'express';
import Token from '../middlewares/Token';
import AuthController from '../controllers/AuthController';
import UserController from '../controllers/UserController';

const router = Router();

router.post('/auth', AuthController.authenticate);
router.get('/validate', Token.validateToken, UserController.validate);

export default router;
