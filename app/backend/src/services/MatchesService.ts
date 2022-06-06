/*

import Team from '../database/models/TeamModel';
import Match from '../database/models/MatchModel';

export default class MacthService {
  getAll = async (inProgress: number) => {
    const resultGetAll = await Match.findAll({
      include: [{ model: Team, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: Team, as: 'teamAway', attributes: { exclude: ['id'] } }],
    });
    if (inProgress === 1) {
      const result = await Match.findAll({ where: { inProgress: 1 },
        include: [{ model: Team, as: 'teamHome', attributes: { exclude: ['id'] } },
          { model: Team, as: 'teamAway', attributes: { exclude: ['id'] } }],
      });
      console.log(result, 'result - inProgress');
      return { resultGetAll, result };
    }

    const resultGetAll = await Match.findAll({
      include: [{ model: Team, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: Team, as: 'teamAway', attributes: { exclude: ['id'] } }],
    });
    console.log(resultGetAll, 'result-GetAll');
    return resultGetAll;
  };
   */
/*
  getByInProgress = async (inProgress: number) => {
    getAllInProgress = async () => {
      const result = await Match.findOne({ where: { inProgress } });
      console.log(result, 'log result-service');
      return result;
    };
    const result = await this.getByInProgress.findAll({
      include: [{ model: Team, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: Team, as: 'teamAway', attributes: { exclude: ['id'] } }],
    });
    console.log(result, 'log result-service');
    return result;
  };
  /*
 async getByInProgress (inProgress) => {
    const result = await Match.findAll({ { where: { id } }
      include: [{ model: Team, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: Team, as: 'teamAway', attributes: { exclude: ['id'] } }],
    });
    console.log(result, 'log result-service');
    return result;

}

*/
