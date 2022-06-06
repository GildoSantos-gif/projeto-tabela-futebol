import * as express from 'express';
import PostMatchesFinishController
  from '../controllers/PostMatchesController';
import ValidToken from '../validatesAll/ValidToken';

const postMatchesFinishRouter = express.Router();
const controller = new PostMatchesFinishController();
const validToken = new ValidToken();

postMatchesFinishRouter.patch(
  '/:id/finish',
  validToken.loginValidate,
  controller.createMatch,
);

export default postMatchesFinishRouter;
