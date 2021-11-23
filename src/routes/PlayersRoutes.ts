import { Router } from 'express';
import PlayersController from '../controllers/PlayersController';

const router = Router();

router.get('/players', PlayersController.getAllPlayers);
router.get('/players/:clubName', PlayersController.getPlayerForClub);
router.get('/scorers', PlayersController.scorersPlayers);

export default router;
