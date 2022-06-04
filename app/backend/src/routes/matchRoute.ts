import * as express from 'express';
import MatchController from '../controllers/MatchesController';

const matchRouter = express.Router();
const controller = new MatchController();

matchRouter.get('/', controller.getAll);

// MatchRouter.get('/:id', controller.getbyId);

export default matchRouter;
