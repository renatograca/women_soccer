import { Router } from 'express';
import PlayersController from '../controllers/players.controller';

const router = Router();

router.get('/players', PlayersController.getAllPlayers);
router.get('/players/:clubName', PlayersController.getPlayerForClub);

export default router;
