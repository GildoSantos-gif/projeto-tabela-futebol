import * as express from 'express';
import PostMatchesController from '../controllers/PostMatchesController';
import ValidToken from '../validatesAll/ValidToken';

const postMatchesRouter = express.Router();
const controller = new PostMatchesController();
const validToken = new ValidToken();

postMatchesRouter.post(
  '/',
  validToken.loginValidate,
  controller.createMatch,
);

export default postMatchesRouter;
