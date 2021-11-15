import * as express from 'express';
import GoalsController from '../controllers/goals';

class GoalsRoutes {
  router: express.Router;

  constructor() {
    this.router = express.Router();
    this.getAllGoals();
  }

  getAllGoals() {
    this.router.get('/goals', GoalsController.getAllGoals);
  }
}

export default new GoalsRoutes().router;
