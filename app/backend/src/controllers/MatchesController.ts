import { Request, Response } from 'express';
import Team from '../database/models/TeamModel';
import Match from '../database/models/MatchModel';
// import MatchesService from '../services/MatchesService';

export default class MatchesController {
  getAll = async (req: Request, res: Response) => {
    const query = req.query.inProgress;
    if (query) {
      const inProgress = query === 'true'; // por default o retorno é false de tipo boleano
      const result = await Match.findAll({ where: { inProgress },
        include: [{ model: Team, as: 'teamHome', attributes: { exclude: ['id'] } },
          { model: Team, as: 'teamAway', attributes: { exclude: ['id'] } }],
      });
      console.log(result, 'result - inProgress');
      return res.status(200).json(result);
    }
    const resultGetAll = await Match.findAll({
      include: [{ model: Team, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: Team, as: 'teamAway', attributes: { exclude: ['id'] } }],
    });
    return res.status(200).json(resultGetAll);
  };
}
