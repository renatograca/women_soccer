import { Router } from 'express';
import ClubsController from '../controllers/clubs.controller';

const router = Router();

router.get('/clubs', ClubsController.getAllClubs);
router.get('/clubs/:id', ClubsController.getOneClub);

export default router;
