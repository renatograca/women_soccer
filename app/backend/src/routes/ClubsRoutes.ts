import { Router } from 'express';
import ClubsController from '../controllers/ClubsController';

const router = Router();

router.get('/clubs', ClubsController.getAllClubs);
router.get('/clubs/:id', ClubsController.getOneClub);

export default router;
