import Team from '../database/models/TeamModel';

export default class TeamService {
  getAll = async () => {
    const result = await Team.findAll();
    console.log(result, 'log result-service');
    return result;
  };

  getById = async (id: number) => {
    const result = await Team.findOne({ where: { id } });
    console.log(result, 'log result-service');
    return result;
  };
}
