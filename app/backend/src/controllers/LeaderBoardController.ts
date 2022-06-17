import { Request, Response } from 'express';
import LeaderBoardService from '../services/LeaderBoardService';

export default class LoaderBoardController {
  leaderBoardService: LeaderBoardService;

  constructor() {
    this.leaderBoardService = new LeaderBoardService();
  }

  public getTable = async (req: Request, res: Response) => {
    try {
      const getClassificationHomeTeam = await
      this.leaderBoardService.orderGetClassificationHomeTeam();
      console.log(getClassificationHomeTeam, 'log controller');
      return res.status(200).json(getClassificationHomeTeam);
    } catch (err) {
      return res.status(500).json({ message: 'internal server error' });
    }
  };
}
