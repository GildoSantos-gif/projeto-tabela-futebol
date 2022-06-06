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
      await Match.update({ inProgress: false }, { where: { id: Number(id) } });

      // console.log(result);
      return res.status(200).json({ message: 'Finished' });
    } catch (e) {
      res.status(500).json({ message: 'internal server error' });
    }
  };
}
