import * as express from 'express';
import MatchesController from '../controllers/MatchesController';

const matchRouter = express.Router();
const controller = new MatchesController();

matchRouter.get('/', controller.getAll);

// matchRouter.get('/inProgress', controller.getbyInProgress);

export default matchRouter;
