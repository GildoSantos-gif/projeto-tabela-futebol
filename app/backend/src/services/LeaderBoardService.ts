import Match from '../database/models/MatchModel';
import Team from '../database/models/TeamModel';

export default class LeaderboardService {
  match;
  team;

  constructor() {
    this.match = Match;
    this.team = Team;
  }

  static sumTotalVictories = (matches: Match[]) =>
    matches.reduce((acc, curr) => (curr.homeTeamGoals > curr.awayTeamGoals
      ? acc + 1 : acc), 0);

  static sumTotalLosses = (matches: Match[]) =>
    matches.reduce((acc, curr) => (curr.homeTeamGoals < curr.awayTeamGoals
      ? acc + 1 : acc), 0);

  static sumTotalDraws = (matches: Match[]) =>
    matches.reduce((acc, curr) => (curr.homeTeamGoals === curr.awayTeamGoals
      ? acc + 1 : acc), 0);

  static sumTotalGoalsPro = (matches: Match[]) =>
    matches.reduce((acc, curr) => (curr.homeTeamGoals + acc), 0);

  static sumTotalGoalsOwn = (matches: Match[]) =>
    matches.reduce((acc, curr) => (curr.awayTeamGoals + acc), 0);

  static table(matches: Match[]) {
    const totalVictories = this.sumTotalVictories(matches);
    const totalLosses = this.sumTotalLosses(matches);
    const totaldraws = this.sumTotalDraws(matches);
    const goalsfavor = this.sumTotalGoalsPro(matches);
    const goalsOwn = this.sumTotalGoalsOwn(matches);
    const totalPoints = (Number(totalVictories) * 3) + Number(totaldraws);
    const efficiency = (Number(totalPoints) / (matches.length * 3)) * 100;
    return {
      totalPoints: Number(totalPoints),
      totalGames: Number(matches.length),
      totalVictories: Number(totalVictories),
      totalDraws: Number(totaldraws),
      totalLosses: Number(totalLosses),
      goalsFavor: Number(goalsfavor),
      goalsOwn: Number(goalsOwn),
      goalsBalance: Number(goalsfavor) - Number(goalsOwn),
      efficiency: Number(efficiency.toFixed(2)),
    };
  }

  getClassificationHomeTeam = async () => {
    const teamsResult = await this.team.findAll();
    console.log(teamsResult, 'teams result');
    const mapTeamsResult = Promise.all(teamsResult.map(async ({ id, teamName }) => {
      const matchesResult = await
      this.match.findAll({ where: { homeTeam: id, inProgress: false } });
      const resultTable = LeaderboardService.table(matchesResult);
      console.log(mapTeamsResult, 'map-teams-result');
      console.log(mapTeamsResult, 'matches-result');
      console.log(resultTable, ' log-result-table');
      return {
        name: teamName,
        ...resultTable,
      };
    }));
    return mapTeamsResult;
  };

  orderGetClassificationHomeTeam = async () => {
    const result = await this.getClassificationHomeTeam();
    const resultt = result.sort((a, b) => b.totalPoints - a.totalPoints
    || b.totalVictories - a.totalVictories
    || b.goalsBalance - a.goalsBalance
    || b.goalsFavor - a.goalsFavor
    || a.goalsOwn - b.goalsOwn);
    console.log(resultt, 'resultt');
    return resultt;
  };
}
