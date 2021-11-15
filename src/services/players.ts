import Players from '../database/models/players';

class PlayersService {
  async getAllPlayers() {
    const players = await Players.findAll({ attributes: ['player_id', 'player_name', 'club_id'] });
    return players;
  }
}

export default new PlayersService();
