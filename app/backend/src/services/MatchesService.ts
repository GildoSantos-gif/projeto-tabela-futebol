import Match from '../database/models/MatchModel';

export default class MacthService {
  getAll = async () => {
    const result = await Match.findAll();
    console.log(result, 'log result-service');
    return result;
  };

  getByInProgress = async (inProgress: boolean) => {
    const result = await Match.findAll({ where: { inProgress } });
    // attributes: Include: [{ model: Team, attributes: { tem_name as: temName }}]
    console.log(result, 'log result-service');
    return result;
  };
}
