import { Request, Response } from 'express';
import Match from '../database/models/MatchModel';

export default class PutMatchesController {
  putMatch = async (req: Request, res: Response) => {
    const { id, homeTeamGoals, awayTeamGoals } = req.params;
    try {
      Match.update({ homeTeamGoals, awayTeamGoals }, { where: { id } });
      return res.status(200).json();
    } catch (e) {
      res.status(500).json({ message: 'internal server error' });
    }
  };
}
