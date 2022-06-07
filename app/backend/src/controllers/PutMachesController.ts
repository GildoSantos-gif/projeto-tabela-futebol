import { Request, Response } from 'express';
import PostMatchesFinishService from '../services/PostMatchFinishService';
import Match from '../database/models/MatchModel';

export default class PostMatchesFinishController {
  postMatchesFinishService: PostMatchesFinishService;

  constructor() {
    this.postMatchesFinishService = new PostMatchesFinishService();
  }

  putMatch = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const getId = Match.findByPk(Number(id));
      if (!getId) return res.status(404).end();
      await this.postMatchesFinishService.createMatch(Number(id));

      // console.log(result);
      return res.status(200).json({ message: 'Finished' });
    } catch (e) {
      res.status(500).json({ message: 'internal server error' });
    }
  };
}
