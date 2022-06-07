import * as express from 'express';
import MatchesController from '../controllers/MatchesController';
import PostMatchesController from '../controllers/PostMatchesController';
import ValidToken from '../validatesAll/ValidToken';
import PostMatchesFinishController
  from '../controllers/PostMatchesFinishController';

const matchRouter = express.Router();
const getController = new MatchesController();
const postcontroller = new PostMatchesController();
const validToken = new ValidToken();
const finishedcontroller = new PostMatchesFinishController();

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

export default matchRouter;
