import { Application } from 'express';
<<<<<<< HEAD
import ClubsRoutes from './clubs';
import PlayerRoutes from './players';
import MatchesRoutes from './matches';
=======
import ClubsRoutes from './ClubsRoutes';
import PlayerRoutes from './PlayersRoutes';
import MatchesRoutes from './MatchesRoutes';
>>>>>>> 72d14c6972d90205829630644485898bb815623b

class Routes {
  public routes(app: Application):void {
    app.get('/', (req, res) => res.send('I am here, friend'));
    app.use('/', ClubsRoutes);
    app.use('/', PlayerRoutes);
    app.use('/', MatchesRoutes);
  }
}

export default Routes;
