import Match from '../database/models/MatchModel';
import { createMatchType } from '../helpers/matcheType';
// import Team from '../database/models/TeamModel';

export default class PostMatchesService {
  createMatch = async (data: createMatchType) => {
    const result = await Match.create(data);
    const { id } = result;
    const retorno = {
      id,
      ...data,
    };
    console.log(retorno, 'retorno');
    return retorno;
  };
}
