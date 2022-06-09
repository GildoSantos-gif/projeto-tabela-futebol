import Match from '../database/models/MatchModel';

export default class PutMatchesService {
  putMatch = async (id: number, homeTeamGoals: number, awayTeamGoals: number) => {
    const result = Match.update({ homeTeamGoals, awayTeamGoals }, { where: { id } });
    return result;
  };
}
