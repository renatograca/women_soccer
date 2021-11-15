import { Application } from 'express';
import ClubsRoutes from './clubs';
import PlayerRoutes from './players';
import MatchesRoutes from './matches';
import GoalsRoutes from './goals';

class Routes {
  public routes(app: Application):void {
    app.get('/', (req, res) => res.send('I am here, friend'));
    app.use('/', ClubsRoutes);
    app.use('/', PlayerRoutes);
    app.use('/', MatchesRoutes);
    app.use('/', GoalsRoutes);
  }
}

export default Routes;
