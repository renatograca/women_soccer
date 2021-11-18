import Matches from '../database/models/matches';

class MatchesService {
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
