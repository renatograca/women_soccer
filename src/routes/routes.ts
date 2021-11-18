import { Application } from 'express';
import ClubsRoutes from './clubsRoutes';
import PlayerRoutes from './playersRoutes';
import MatchesRoutes from './matchesRoutes';

class Routes {
  public routes(app: Application):void {
    app.get('/', (req, res) => res.send('I am here, friend'));
    app.use('/', ClubsRoutes);
    app.use('/', PlayerRoutes);
    app.use('/', MatchesRoutes);
  }
}

export default Routes;
