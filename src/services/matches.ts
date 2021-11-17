import Matches from '../database/models/matches';

class MatchesService {
  async getAllMatches() {
    const matches = await Matches.findAll({ attributes: { exclude: ['id'] } });
    return matches;
  }
}

export default new MatchesService();
