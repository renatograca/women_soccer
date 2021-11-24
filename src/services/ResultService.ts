import { literal } from 'sequelize';
import Matches from '../database/models/MatchesModel';
import {
  resultC1, gamesC1, victoriesC1, drawsC1, defeatsC1, goalsC1, ownGoalsC1,
  resultC2, gamesC2, victoriesC2, drawsC2, defeatsC2, goalsC2, ownGoalsC2,
} from './Querys/result';

// interface returnMatch {
//   homeTeam:number,
//   resultC1:number,
//   gamesC1:number,
//   victoriesC1:number,
//   drawsC1:number,
//   defeatsC1:number,
//   goalsC1:number,
//   ownGoalsC1:number,
// }

class ResultService {
  async result() {
    const matchesC1 = Matches.findAll({
      attributes: [
        'homeTeam',
        [literal(resultC1), 'resultHome'],
        [literal(gamesC1), 'gamesHome'],
        [literal(victoriesC1), 'victoriesHome'],
        [literal(drawsC1), 'drawsHome'],
        [literal(defeatsC1), 'defeatsHome'],
        [literal(goalsC1), 'goalsHome'],
        [literal(ownGoalsC1), 'ownGoalsHome'],
      ],
      group: ['homeTeam'],
    });
    const matchesC2 = Matches.findAll({
      attributes: [
        'awayTeam',
        [literal(resultC2), 'resultAway'],
        [literal(gamesC2), 'gamesAway'],
        [literal(victoriesC2), 'victoriesAway'],
        [literal(drawsC2), 'drawsAway'],
        [literal(defeatsC2), 'defeatsAway'],
        [literal(goalsC2), 'goalsAway'],
        [literal(ownGoalsC2), 'ownGoalsAway'],
      ],
      group: ['awayTeam'],
    });

    try {
      const resultClubs = await Promise.all([matchesC1, matchesC2]);
      const together: object[] = [];
      resultClubs[0].forEach(({ dataValues: homeClub }:any) => resultClubs[1]
        .forEach(({ dataValues: visitingClub }:any) => {
          if (homeClub.homeTeam === visitingClub.awayTeam) {
            const result = {
              club_id: homeClub.homeTeam,
              result: +homeClub.resultHome + +visitingClub.resultAway,
              games: +homeClub.gamesHome + +visitingClub.gamesAway,
              victories: +homeClub.victoriesHome + +visitingClub.victoriesAway,
              draws: +homeClub.drawsHome + +visitingClub.drawsAway,
              looses: +homeClub.defeatsHome + +visitingClub.defeatsAway,
              goals: +homeClub.goalsHome + +visitingClub.goalsAway,
              ownGoals: +homeClub.ownGoalsHome + +visitingClub.ownGoalsAway,
              goalsBalance: 0,
              efficiency: 0,
            };

            result.goalsBalance = result.goals - result.ownGoals;
            result.efficiency = Number(((result.result / (result.games * 3)) * 100).toFixed(2));

            together.push(result);
          }
        }));
      return together.sort(({ result: a }: any, { result: b }: any):number => b - a);
    } catch (error) {
      return error;
    }
  }
}

export default new ResultService();
