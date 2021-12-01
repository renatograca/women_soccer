import Clubs from '../database/models/ClubsModel';

class ClubsService {
  public async getAllClubs() {
    const clubs = await Clubs.findAll({ raw: true });

    return clubs;
  }

  async getOneClub(id: number): Promise<any> {
    try {
      const club = await Clubs.findByPk(id);

      return club;
    } catch (error) {
      return error;
    }
  }
}

export default new ClubsService();
