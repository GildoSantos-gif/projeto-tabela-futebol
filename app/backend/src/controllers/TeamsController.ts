import { Request, Response } from 'express';
import TeamService from '../services/Teamservice';

export default class TeamsController {
  teamService: TeamService;

  constructor() {
    this.teamService = new TeamService();
  }

  getAll = async (req: Request, res: Response) => {
    try {
      const result = await this.teamService.getAll();
      res.status(200).json(result);
    } catch (err) {
      return res.status(500).json({ message: 'internal server error' });
    }
  };
}
