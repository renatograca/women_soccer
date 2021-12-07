import Clubs from '../database/models/ClubsModel';

class ClubsService {
  public async getAllClubs() {
    const clubs = await Clubs.findAll({ raw: true });

    return clubs;
  }

  async getOneClub(id: number): Promise<any> {
    const club = await Clubs.findByPk(id);

    return club;
  }
}

export default new ClubsService();
