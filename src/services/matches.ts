import Matches from '../database/models/matches';

class MatchesService {
  async getAllMatches() {
    const matches = await Matches.findAll({ attributes: ['match_id', 'club_id_1', 'club_id_2', 'match_round'] });
    return matches;
  }
}

export default new MatchesService();
