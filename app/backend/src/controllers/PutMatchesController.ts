import { Request, Response } from 'express';
import PutMatchesService from '../services/PutMatchesService';

export default class PutMatchesController {
  putMatchesService: PutMatchesService;
  constructor() {
    this.putMatchesService = new PutMatchesService();
  }

  putMatch = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;

    try {
      await this.putMatchesService.putMatch(Number(id), homeTeamGoals, awayTeamGoals);
      return res.status(200).json({ message: 'match edited' });
    } catch (e) {
      res.status(500).json({ message: 'internal server error' });
    }
  };
}
