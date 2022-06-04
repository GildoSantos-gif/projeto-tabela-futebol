import { Request, Response } from 'express';
import MatchesService from '../services/MatchesService';

export default class TeamsController {
  matchesService: MatchesService;

  constructor() {
    this.matchesService = new MatchesService();
  }

  getAll = async (req: Request, res: Response) => {
    try {
      const result = await this.matchesService.getAll();
      console.log(result, 'result controller');
      res.status(200).json(result);
    } catch (err) {
      return res.status(500).json({ message: 'internal server error' });
    }
  };

  getbyInProgress = async (req: Request, res: Response) => {
    const { inProgress } = req.params;
    try {
      const result = await this.matchesService.getByInProgress(Boolean(inProgress));
      res.status(200).json(result);
    } catch (err) {
      return res.status(500).json({ message: 'internal server error' });
    }
  };
}
