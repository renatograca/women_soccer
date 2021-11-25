import Matches from '../database/models/MatchesModel';

class MatchesService {
  async createMatch(
    homeTeam: number,
    homeTeamGoals: number,
    awayTeam: number,
    awayTeamGoals: number,
    inProgress: boolean,
  ): Promise<any> {
    try {
      const match = Matches.create({
        homeTeam,
        homeTeamGoals,
        awayTeam,
        awayTeamGoals,
        inProgress,
      });
      return match;
    } catch (error) {
      return error;
    }
  }

  async getAllMatches() {
    const matches = await Matches.findAll({ raw: true });
    return matches;
  }

  async findMatchIdByTeams(homeTeam: number, awayTeam: number) {
    const matchId = await Matches.findAll({
      raw: true,
      where: {
        homeTeam,
        awayTeam,
      },
    });
    return matchId;
  }

  async getOneMatch(id: number) {
    const matches = await Matches.findByPk(id);
    return matches;
  }

  async updateMatch(id: number, homeTeamGoals: number, awayTeamGoals: number) {
    const matches = await Matches.update(
      {
        homeTeamGoals,
        awayTeamGoals,
      },
      {
        where: { id },
      },
    );
    return matches;
  }
}

export default new MatchesService();
