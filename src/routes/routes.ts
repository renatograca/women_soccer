import { Application } from 'express';
import ClubsRoutes from './clubs.routes';
import PlayerRoutes from './players.routes';
import MatchesRoutes from './matches.routes';
import UsersRoutes from './users.routes';
import AuthRoutes from './auth.routes';

class Routes {
  public routes(app: Application):void {
    app.get('/', (req, res) => res.send('I am here, friend'));
    app.use('/', ClubsRoutes);
    app.use('/', PlayerRoutes);
    app.use('/', MatchesRoutes);
    app.use('/', UsersRoutes);
    app.use('/', AuthRoutes);
  }
}

export default Routes;
