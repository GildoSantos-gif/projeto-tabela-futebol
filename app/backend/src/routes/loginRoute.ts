import * as express from 'express';
import LoginController from '../controllers/LoginController';
import ValidationLogin from '../validatesAll/ValidationLogin';

const loginRouter = express.Router();
const controller = new LoginController();
const validationLogin = new ValidationLogin();

loginRouter.post('/', validationLogin.validLogin, controller.login);
loginRouter.get('/validate', controller.loginValidate);

export default loginRouter;
