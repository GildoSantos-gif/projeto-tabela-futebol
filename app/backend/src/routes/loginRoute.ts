import * as express from 'express';
import LoginController from '../controllers/LoginController';
import validLogin from '../validatesAll/validLogin';

const loginRouter = express.Router();
const controller = new LoginController();

loginRouter.post('/', controller.loginEmailRegex, validLogin, controller.login);
loginRouter.get('/validate', controller.loginValidate);

export default loginRouter;
