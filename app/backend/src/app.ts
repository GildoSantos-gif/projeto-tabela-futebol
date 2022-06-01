import * as express from 'express';
import bodyParser = require('body-parser');
import loginRoute from './routes';

class App {
  public app: express.Express;
  // ...

  constructor() {
    // ...
    this.app = express();
    this.config();
    this.routes();
  }

   public routes() {
    this.app.use('/login', loginRoute);

    this.app.get('');
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(accessControl);
    this.app.use(express.json());
    this.app.use(bodyParser.json());

    // ...
  }

  // ...
  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`ON in the port ${PORT}`));
  }
}

export { App };

// A execução dos testes de cobertura depende dessa exportação
export const { app } = new App();
