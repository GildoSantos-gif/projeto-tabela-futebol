import * as express from 'express';
import TeamController from '../controllers/TeamsController';

const teamRouter = express.Router();
const controller = new TeamController();

teamRouter.get('/', controller.getAll);

// teamRouter.get('/validate', controller.loginValidate);

export default teamRouter;
