// import Clubs from '../database/models/clubs';
import Clubs from '../database/models/clubs';
import Players from '../database/models/players';

class PlayersService {
  async getAllPlayers() {
    const players = await Players.findAll({ attributes: ['player_id', 'player_name', 'club_id'] });
    return players;
  }

  async getOnePlayer(id:string) {
    const players = await Players.findOne({
      where: { player_id: id },
      attributes: ['player_id', 'player_name', 'club_id'],
      include: [{ model: Clubs, as: 'clubs' }],
    });
    return players;
  }
}

export default new PlayersService();
