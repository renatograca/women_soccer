import Clubs from '../database/models/clubs';
import Players from '../database/models/players';

class PlayersService {
  async getAllPlayers() {
    // const noTes = new Testeclass();
    const players = await Players.findAll({ attributes: ['player_id', 'player_name', 'club_id'] });
    // const ttes = await noTes.findAll()
    return players;
  }

  async getOnePlayer(id: number): Promise<any> {
    try {
      const players = await Players.findOne({
        where: { player_id: id },

        include: [{ model: Clubs, as: 'clubsplayers', attributes: ['club_name'] }],
      });
      return players;
    } catch (error) {
      console.log(error);

      return error;
    }
  }
}

export default new PlayersService();
