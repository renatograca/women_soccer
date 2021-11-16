import * as express from 'express';
import PlayersController from '../controllers/players';

class PlayersRoutes {
  router;

  constructor() {
    this.router = express.Router();
    this.Players();
  }

  Players() {
    this.router.get('/players', PlayersController.getAllPlayers);
    this.router.get('/players/:id', PlayersController.getOnePlayer);
  }
}

export default new PlayersRoutes().router;
