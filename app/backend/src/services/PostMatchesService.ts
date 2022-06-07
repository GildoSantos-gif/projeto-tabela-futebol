import Match from '../database/models/MatchModel';
import { createMatchType } from '../helpers/matcheType';
// import Team from '../database/models/TeamModel';

export default class PostMatchesService {
  createMatch = async (data: createMatchType) => {
    /*
    const { homeTeam, awayTeam } = data;
    const getHomeTeam = await Team.findOne({ where: { id: homeTeam } });
    const getAwayTeam = await Team.findOne({ where: { id: awayTeam } });
    // console.log(getHomeTeam, getAwayTeam); //está retornando null
    if (!getHomeTeam || !getAwayTeam) {
      return undefined;
    }
    if (getHomeTeam === null || getAwayTeam === null) {
      return undefined;
    }
    */

    const result = await Match.create(data);
    return result;
  };
}
