import { Application } from 'express';
import ClubsRoutes from './clubs';

class Routes {
  public routes(app: Application):void {
    app.use('/', ClubsRoutes);
  }
}

export default Routes;
