<<<<<<< HEAD:src/services/clubs.ts
import Clubs from '../database/models/clubs';
=======
import Clubs from '../database/models/ClubsModel';
>>>>>>> 72d14c6972d90205829630644485898bb815623b:src/services/ClubsService.ts

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
