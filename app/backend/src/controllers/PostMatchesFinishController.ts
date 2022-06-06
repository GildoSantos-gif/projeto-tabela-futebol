import { Request, Response } from 'express';
import PostMatchesFinishService from '../services/PostMatchFinishService';

export default class PostMatchesFinishController {
  postMatchesFinishService: PostMatchesFinishService;

  constructor() {
    this.postMatchesFinishService = new PostMatchesFinishService();
  }

  createMatch = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      await this.postMatchesFinishService.createMatch(Number(id));

      // console.log(result);
      return res.status(200).send({ message: 'Finished' });
    } catch (e) {
      res.status(500).json({ message: 'internal server error' });
    }
  };
}
