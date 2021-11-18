import { Router } from 'express';
import PlayersController from '../controllers/PlayersController';

const router = Router();

router.get('/players', PlayersController.getAllPlayers);
router.get('/players/:id', PlayersController.getOnePlayer);

export default router;
