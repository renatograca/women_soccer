import { literal } from 'sequelize';
import Matches from '../database/models/MatchesModel';
import {
  resultC1, gamesC1, victoriesC1, drawsC1, loosesC1, goalsC1, goalsOwnC1,
  resultC2, gamesC2, victoriesC2, drawsC2, loosesC2, goalsC2, goalsOwnC2,
} from './Querys/result';

// interface returnMatch {
//   club_id_1:number,
//   resultC1:number,
//   gamesC1:number,
//   victoriesC1:number,
//   drawsC1:number,
//   loosesC1:number,
//   goalsC1:number,
//   goalsOwnC1:number,
// }

class ResultService {
  async result() {
    const matchesC1 = Matches.findAll({
      attributes: [
        'club_id_1',
        [literal(resultC1), 'result_c1'],
        [literal(gamesC1), 'games_c1'],
        [literal(victoriesC1), 'victories_c1'],
        [literal(drawsC1), 'draws_c1'],
        [literal(loosesC1), 'looses_c1'],
        [literal(goalsC1), 'goals_c1'],
        [literal(goalsOwnC1), 'goals_own_c1'],
      ],
      group: ['club_id_1'],
    });
    const matchesC2 = Matches.findAll({
      attributes: [
        'club_id_2',
        [literal(resultC2), 'result_c2'],
        [literal(gamesC2), 'games_c2'],
        [literal(victoriesC2), 'victories_c2'],
        [literal(drawsC2), 'draws_c2'],
        [literal(loosesC2), 'looses_c2'],
        [literal(goalsC2), 'goals_c2'],
        [literal(goalsOwnC2), 'goals_own_c2'],
      ],
      group: ['club_id_2'],
    });

    const resultClubs = await Promise.all([matchesC1, matchesC2]);
    const together: object[] = [];
    resultClubs[0].forEach(({ dataValues: clubMadante }:any) => resultClubs[1]
      .forEach(({ dataValues: clubVisitante }:any) => {
        if (clubMadante.club_id_1 === clubVisitante.club_id_2) {
          together.push({
            club_id: clubMadante.club_id_1,
            result: +clubMadante.result_c1 + +clubVisitante.result_c2,
            games: +clubMadante.games_c1 + +clubVisitante.games_c2,
            victories: +clubMadante.victories_c1 + +clubVisitante.victories_c2,
            draws: +clubMadante.draws_c1 + +clubVisitante.draws_c2,
            looses: +clubMadante.looses_c1 + +clubVisitante.looses_c2,
            goals: +clubMadante.goals_c1 + +clubVisitante.goals_c2,
            goalsOwn: +clubMadante.goals_own_c1 + +clubVisitante.goals_own_c2,
          });
        }
      }));
    return together;
  }
}

export default new ResultService();
