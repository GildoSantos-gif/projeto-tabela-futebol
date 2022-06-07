import Match from '../database/models/MatchModel';

export default class PostMatchesFinishService {
  createMatch = async (id: number) => {
    await Match.update({ inProgress: 'false' }, { where: { id: +id } });
  };
}
