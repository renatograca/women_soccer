import * as express from 'express';
import ClubsController from '../controllers/clubs';

class ClubsRoutes {
  router;

  constructor() {
    this.router = express.Router();
    this.clubs();
  }

  clubs() {
    this.router.get('/clubs', ClubsController.getAllClubs);
  }
}

export default new ClubsRoutes().router;
