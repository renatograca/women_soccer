import { Router } from 'express';
import UsersController from '../controllers/UserController';

const router = Router();

router.post('/users', UsersController.createNewUser);

export default router;
