// import { Request, Response } from 'express';
// import PlayersService from './PlayersService';

// export default class PlayersController {
//   public static async getAllPlayers(req:Request, res:Response) {
//     const players = await PlayersService.getAllPlayers();
//     return res.status(200).json(players);
//   }

//   public static async getPlayerForClub(req: Request, res: Response) {
//     const { clubName } = req.params;
//     const player = await PlayersService.getPlayerForClub(clubName);

//     return res.status(200).json(player);
//   }

//   public static async scorersPlayers(req: Request, res: Response) {
//     const rankingPlayers = await PlayersService.scorersPlayers();

//     return res.status(200).json(rankingPlayers);
//   }
// }
