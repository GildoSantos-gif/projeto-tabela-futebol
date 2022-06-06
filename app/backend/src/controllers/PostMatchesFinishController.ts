import { Request, Response } from 'express';
import Match from '../database/models/MatchModel';
// import PostMatchesService from '../services/PostMatchesService';

export default class PostMatchesFinishController {
  // postMatchesService: PostMatchesService;

  // constructor() {
  //  this.postMatchesService = new PostMatchesService();
  // }

  createMatch = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const result = await Match.create({ where: { id: Number(id) } });
      if (!result) {
        return res.status(401).end;
      }
      console.log(result);
      return res.status(201).json({ message: 'Finished' });
    } catch (e) {
      res.status(500).json({ message: 'internal server error' });
    }
  };
}
