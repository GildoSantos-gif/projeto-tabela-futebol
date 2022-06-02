import Team from '../database/models/TeamModel';

export default class TeamService {
  getAll = async () => {
    const result = await Team.findAll();
    return result;
  };
}
