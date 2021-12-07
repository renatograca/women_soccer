import * as express from 'express';
import * as cors from 'cors';
import Routes from './routes/Routes';
import 'dotenv/config';

class App {
  public app: express.Application;

  public routePrv: Routes = new Routes();

  constructor() {
    this.app = express();
    this.config();
    this.routePrv.routes(this.app);
    this.start();
  }

  private config():void {
    this.app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    });
    this.app.use(express.json());
    this.app.use(cors());
  }

  private start():void {
    const PORT = process.env.PORT || 3001;
    this.app.listen(PORT, () => console.log(`I am here, friend in port ${PORT}`));
  }
}

export default new App().app;
