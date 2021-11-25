import { Router } from 'express';
import UsersController from '../controllers/UserController';
import UserMiddleware from '../middlewares/UserMiddleware';
import Token from '../middlewares/Token';

const router = Router();

router.post(
  '/users',
  UserMiddleware.validateExistingFields,
  UserMiddleware.validateFieldsFormats,
  UserMiddleware.validateEmail,
  UsersController.createNewUser,
);
router.get('/users', Token.validateToken, UsersController.getOneUser);

export default router;
