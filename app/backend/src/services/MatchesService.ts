import Match from '../database/models/MatchModel';

export default class MacthService {
  getAll = async () => {
    const result = await Match.findAll();
    console.log(result, 'log result-service');
    return result;
  };

  getById = async (id: number) => {
    const result = await Match.findOne({ where: { id } });
    console.log(result, 'log result-service');
    return result;
  };
}
