import * as express from 'express';
import MatchesController from '../controllers/MatchesController';
import PostMatchesController from '../controllers/PostMatchesController';
import ValidToken from '../validatesAll/ValidToken';
import PostMatchesFinishController
  from '../controllers/PostMatchesFinishController';
import PutMatchesController from '../controllers/PutMatchesController';

const matchRouter = express.Router();
const getController = new MatchesController();
const postcontroller = new PostMatchesController();
const validToken = new ValidToken();
const finishedcontroller = new PostMatchesFinishController();
const putMatches = new PutMatchesController();

matchRouter.get('/', getController.getAll);
matchRouter.post(
  '/',
  validToken.loginValidate,
  postcontroller.createMatch,
);
matchRouter.patch(
  '/:id/finish',
  finishedcontroller.createMatch,
);
matchRouter.patch(
  '/:id',
  putMatches.putMatch,
);

export default matchRouter;
