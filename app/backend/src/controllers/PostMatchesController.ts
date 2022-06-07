import { Request, Response } from 'express';
import PostMatchesService from '../services/PostMatchesService';
import Team from '../database/models/TeamModel';

const message = {
  message: 'It is not possible to create a match with two equals teams',
};
const message2 = { message: 'There is no team with such id!' };

export default class PostMatchesController {
  postMatchesService: PostMatchesService;
  constructor() {
    this.postMatchesService = new PostMatchesService();
  }

  createMatch = async (req: Request, res: Response) => {
    const { homeTeam, awayTeam, homeTeamGoals,
      awayTeamGoals, inProgress } = req.body;
    try {
      const getHomeTeam = await Team.findByPk(Number(homeTeam));
      const getAwayTeam = await Team.findByPk(Number(awayTeam));
      if (!getHomeTeam || !getAwayTeam) return res.status(404).json(message2);

      if (homeTeam.length === awayTeam.length) {
        return res.status(401).json(message);
      }
      const result = await this.postMatchesService.createMatch(
        { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals, inProgress },
      );
      // if (result === undefined) return res.status(404).json(message2);
      return res.status(201).json(result);
    } catch (e) {
      res.status(500).json({ message: 'internal server error' });
    }
  };
}
