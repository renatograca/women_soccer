import Clubs from '../database/models/ClubsModel';
import Players from '../database/models/PlayersModel';

class PlayersService {
  async getAllPlayers() {
    const players = await Players.findAll();
    return players;
  }

  async gatPlayerForClub(clubName: string): Promise<any> {
    try {
      const players = await Clubs.findOne({
        where: { club_name: clubName },
        include: [{ model: Players, as: 'player' }],
      });
      return players;
    } catch (error) {
      return error;
    }
  }
}

export default new PlayersService();
