class ClubsService {
  table;

  constructor() {
    this.table = ['hello'];
  }

  public async getAllClubs() {
    // const club = await this.table
    return this.table;
  }
}

export default new ClubsService();
