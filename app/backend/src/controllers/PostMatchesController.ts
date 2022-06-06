import { Request, Response } from 'express';
// import Match from '../database/models/MatchModel';
import PostMatchesService from '../services/PostMatchesService';

export default class PostMatchesController {
  postMatchesService: PostMatchesService;

  constructor() {
    this.postMatchesService = new PostMatchesService();
  }

  createMatch = async (req: Request, res: Response) => {
    try {
      const { homeTeam, awayTeam, homeTeamGoals,
        awayTeamGoals, inProgress } = req.body;
      const result = await this.postMatchesService.createMatch(
        { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals, inProgress },
      );
      console.log(result);
      return res.status(201).json(result);
    } catch (e) {
      res.status(500).json({ message: 'internal server error' });
    }
  };
}