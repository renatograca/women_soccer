// import Players from '../database/models/players';
import Clubs from '../database/models/clubs';

class ClubsService {
  table;

  constructor() {
    this.table = ['hello'];
  }

  public async getAllClubs() {
    const clubs = await Clubs.findAll({ attributes: ['club_id', 'club_name'] });

    return clubs;
  }

  async getOneClub(id: number): Promise<any> {
    try {
      const club = await Clubs.findAll({
        where: { club_id: id },
        attributes: { exclude: ['id'] },
        include: [{ all: true, attributes: { exclude: ['id'] } }],
      });

      return club;
    } catch (error) {
      console.log(error);

      return error;
    }
  }
}

export default new ClubsService();
