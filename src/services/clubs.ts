// import Players from '../database/models/players';
import Clubs from '../database/models/clubs';

class ClubsService {
  table;

  constructor() {
    this.table = ['hello'];
  }

  public async getAllClubs() {
    const clubs = await Clubs.findAll();

    return clubs;
  }

  async getOneClub(id: number): Promise<any> {
    try {
      const club = await Clubs.findOne({
        where: { id },
      });

      return club;
    } catch (error) {
      return error;
    }
  }
}

export default new ClubsService();
