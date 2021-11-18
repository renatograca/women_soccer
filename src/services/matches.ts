import * as Sequelize from 'sequelize';
import Clubs from '../database/models/clubs';
import Players from '../database/models/players';
import Matches from '../database/models/matches';

class MatchesService {
  async getAllMatches() {
    const matches = await Matches.findAll({
      where: { club_id_1: 16 },
      attributes: [[Sequelize.fn('COUNT', Sequelize.col('*')), 'n_hats']],
    });
    return matches;
  }

  async getOneMatch(id: number) {
    const matches = await Matches.findOne({
      where: { id },
      include: [{
        model: Players,
        as: 'players',
        attributes: { exclude: ['club_id'] },
        through: { attributes: [] },
        include: [{ model: Clubs, as: 'club' }],
      }],
    });
    return matches;
  }
}

export default new MatchesService();
