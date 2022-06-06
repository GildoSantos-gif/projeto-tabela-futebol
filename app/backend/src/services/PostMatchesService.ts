import Match from '../database/models/MatchModel';
import { createMatchType } from '../helpers/matcheType';

export default class PostMatchesService {
  createMatch = async (data: createMatchType) => {
    const { homeTeam, awayTeam } = data;
    if (homeTeam === awayTeam) {
      return undefined;
    }
    const result = await Match.create(data);
    return result;
  };
}
