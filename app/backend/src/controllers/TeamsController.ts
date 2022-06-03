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

  getbyId = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const result = await this.teamService.getById(+id); // +id = Number(id)
      res.status(200).json(result);
    } catch (err) {
      return res.status(500).json({ message: 'internal server error' });
    }
  };
}
