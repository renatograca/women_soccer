import { Router } from 'express';
import UsersController from '../controllers/user.controller';
import UserMiddleware from '../middlewares/user.middleware';

const router = Router();

router.post(
  '/users',
  UserMiddleware.validateExistingFields,
  UserMiddleware.validateFieldsFormats,
  UserMiddleware.validateEmail,
  UsersController.createNewUser,
);

export default router;
