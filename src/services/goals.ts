// import Clubs from '../database/models/clubs';
// import Matches from '../database/models/matches';
import Goals from '../database/models/goals';
// import Players from '../database/models/players';

class GoalsService {
  async getAllGoals() {
    const goals = await Goals.findAll({
      // attributes: { exclude: ['id'] },
      // include: [
      //   {
      //     model: Players,
      //     as: 'player',
      //     include: [{ model: Clubs, as: 'club' }],
      //     attributes: { exclude: ['id'] },
      //   },
      //   { model: Matches, as: 'match', attributes: { exclude: ['id'] } },
      // ],
    });

    return goals;
  }
}

export default new GoalsService();
