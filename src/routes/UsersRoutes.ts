import { Router } from 'express';
import UsersController from '../controllers/UserController';
import UserMiddleware from '../middlewares/UserMiddleware';

const router = Router();

router.post(
  '/users',
  UserMiddleware.validateExistingFields,
  UserMiddleware.validateFieldsFormats,
  UserMiddleware.validateEmail,
  UsersController.createNewUser,
);

export default router;
