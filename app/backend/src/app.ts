import * as express from 'express';
import bodyParser = require('body-parser');
import loginRouter from './routes/loginRoute';
import teamRouter from './routes/teamRoute';
import matchRouter from './routes/matchRoute';
import postMatchesRouter from './routes/postMatchesRoute';

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
    this.app.use('/login', loginRouter);
    this.app.use('/teams', teamRouter);
    this.app.use('/matches', matchRouter);
    this.app.use('/matches', postMatchesRouter);
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(accessControl);
    // this.app.use(express.json()); faz mesma coisa do que bodyParser.
    this.app.use(bodyParser.json());
    // this.app.use('/login', loginRoute);

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
