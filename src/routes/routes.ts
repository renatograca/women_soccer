import { Application } from 'express';
import ClubsRoutes from './ClubsRoutes';
import PlayerRoutes from './PlayersRoutes';
import MatchesRoutes from './MatchesRoutes';
import UsersRoutes from './UsersRoutes';

class Routes {
  public routes(app: Application):void {
    app.get('/', (req, res) => res.send('I am here, friend'));
    app.use('/', ClubsRoutes);
    app.use('/', PlayerRoutes);
    app.use('/', MatchesRoutes);
    app.use('/', UsersRoutes);
  }
}

export default Routes;
