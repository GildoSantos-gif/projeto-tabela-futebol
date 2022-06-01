import * as express from 'express';
import LoginController from '../controllers/LoginController';
import validLogin from '../validatesAll/validLogin';

const router = express.Router();
const controller = new LoginController();

router.post('/', validLogin, controller.login);
router.get('/validate');

export default router;
