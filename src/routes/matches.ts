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
    this.router.get('/matches/:id', MathcesController.getOneMatch);
  }
}

export default new MatchesRoutes().router;
