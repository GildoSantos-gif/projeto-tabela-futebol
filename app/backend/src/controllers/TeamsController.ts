/*
import { Request, Response } from 'express';
import TeamsService from '../services/LoginService';
import Team from '../database/models/TeamModel';

export default class TeamsController {
  teamsService: TeamsService;

  constructor() {
    this.loginService = new LoginService();
  }

  getAll = async (req: Request, res: Response) => {
    try {
      const result = await this.TeamService.getAll();
    } catch (err) {
        return res.status(500).json({ message: 'internal server error' });
    }
    res.status(200).json(result);
  };
  */
