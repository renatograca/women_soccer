import * as express from 'express';
import MathcesController from '../controllers/matches';

class MatchesRoutes {
  router: express.Router;

  constructor() {
    this.router = express.Router();
    this.getAllMetches();
  }

  getAllMetches() {
    this.router.get('/matches', MathcesController.getAllMetches);
  }
}

export default new MatchesRoutes().router;
