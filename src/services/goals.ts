import Goals from '../database/models/goals';

class GoalsService {
  async getAllGoals() {
    const goals = await Goals.findAll({ attributes: ['player_id', 'match_round'] });
    return goals;
  }
}

export default new GoalsService();
