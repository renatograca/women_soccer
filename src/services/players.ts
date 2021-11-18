import Clubs from '../database/models/clubs';
import Players from '../database/models/players';

class PlayersService {
  async getAllPlayers() {
    const players = await Players.findAll({
      attributes: { exclude: ['id'] },
    });
    return players;
  }

  async getOnePlayer(id: number): Promise<any> {
    try {
      const players = await Players.findOne({
        where: { id },
        include: [{ model: Clubs, as: 'club' }],
      });
      return players;
    } catch (error) {
      return error;
    }
  }
}

export default new PlayersService();
