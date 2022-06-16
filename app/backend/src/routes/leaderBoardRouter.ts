import * as express from 'express';
import LeaderBoardController from '../controllers/LeaderBoardController';

const leaderBoardRouter = express.Router();
const controller = new LeaderBoardController();

leaderBoardRouter.get('/home', controller.getTable);

export default leaderBoardRouter;
