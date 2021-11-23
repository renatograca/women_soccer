import Matches from '../database/models/matches.model';

class MatchesService {
  async createMatch(
    homeTeam: number,
    homeTeamGoals: number,
    awayTeam: number,
    awayTeamGoals: number,
  ): Promise<any> {
    try {
      const match = Matches.create({
        homeTeam,
        homeTeamGoals,
        awayTeam,
        awayTeamGoals,
      });
      return match;
    } catch (error) {
      return error;
    }
  }

  async getAllMatches() {
    const matches = await Matches.findAll();
    return matches;
  }

  async getOneMatch(id: number) {
    const matches = await Matches.findOne({
      where: { id },
    });
    return matches;
  }
}

export default new MatchesService();
