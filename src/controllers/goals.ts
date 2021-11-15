import { Request, Response } from 'express';
import GoalsService from '../services/goals';

class GoalsController {
  public static async getAllGoals(req: Request, res: Response) {
    const goals = await GoalsService.getAllGoals();
    return res.status(200).json(goals);
  }
}

export default GoalsController;
