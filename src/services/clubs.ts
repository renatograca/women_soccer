import Clubs from '../database/models/clubs';

class ClubsService {
  table;

  constructor() {
    this.table = ['hello'];
  }

  public async getAllClubs() {
    const clubs = await Clubs.findAll({ attributes: ['club_id', 'club_name'] });
    // console.log(clubs);

    return clubs;
  }
}

export default new ClubsService();
