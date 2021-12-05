import { Op } from 'sequelize';
import Matches from '../database/models/MatchesModel';
import Clubs from '../database/models/ClubsModel';

class MatchesService {
  async createMatch(
    homeTeam: number,
    homeTeamGoals: number,
    awayTeam: number,
    awayTeamGoals: number,
    inProgress: boolean,
  ): Promise<any> {
    try {
      const match = Matches.create({
        homeTeam,
        homeTeamGoals,
        awayTeam,
        awayTeamGoals,
        inProgress,
      });
      return match;
    } catch (error) {
      return error;
    }
  }

  async getAllMatches() {
    const matches = await Matches.findAll({
      include: [
        { model: Clubs, as: 'homeClub', attributes: ['clubName'] },
        { model: Clubs, as: 'awayClub', attributes: ['clubName'] },
      ],
    });
    return matches;
  }

  async findMatchIdByTeams(homeTeam: number, awayTeam: number) {
    const matchId = await Matches.findAll({
      raw: true,
      where: {
        homeTeam,
        awayTeam,
      },
    });
    return matchId;
  }

  async getOneMatch(id: number) {
    const matches = await Matches.findByPk(id);
    return matches;
  }

  async updateMatch(id: number, homeTeamGoals: number, awayTeamGoals: number) {
    const matches = await Matches.update(
      {
        homeTeamGoals,
        awayTeamGoals,
      },
      {
        where: { id },
      },
    );
    return matches;
  }

  // async matchesInProgress(inProgress: boolean) {
  //   const matches = await Matches.findAll({
  //     raw: true,
  //     where: { inProgress },
  //   });
  //   return matches;
  // }

  async finishMatch(inProgress: boolean, { homeTeam, awayTeam }: any) {
    try {
      const match = await Matches.update(
        { inProgress },
        { where: { [Op.and]: [{ homeTeam }, { awayTeam }] } },
      );
      return match;
    } catch (error) {
      return error;
    }
  }
}

export default new MatchesService();
