import Match from '../database/models/MatchModel';
import { createMatchType } from '../helpers/matcheType';

export default class PostMatchesService {
  createMatch = async (data: createMatchType) => {
    const result = await Match.create(data);
    return result;
  };
}
