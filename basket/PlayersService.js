// import { Op } from 'sequelize';
// import Clubs from '../../../backend/src/database/models/ClubsModel';
// import Players from '../../../backend/src/database/models/PlayersModel';

// class PlayersService {
//   async getAllPlayers() {
//     const players = await Players.findAll({ raw: true });
//     return players;
//   }

//   async getPlayerForClub(clubName: string): Promise<any> {
//     try {
//       const players = await Clubs.findOne({
//         where: { clubName },
//         include: [{ model: Players, as: 'player' }],
//       });
//       return players;
//     } catch (error) {
//       return error;
//     }
//   }

//   async scorersPlayers(): Promise<any> {
//     try {
//       const player = await Players.findAll({
//         where: { goals: { [Op.gt]: 0 } },
//         order: [
//           ['player_name', 'ASC'],
//         ],
//         include: [{ model: Clubs, as: 'club' }],
//       });
//       const playerJson = player.map((play) => play.toJSON());
//       const playerScore = playerJson.map(({ playerName, club: { clubName }, goals }) => (
//         { player: playerName, club: clubName, goals }));

//       return playerScore.sort((a, b) => b.goals - a.goals);
//     } catch (error) {
//       return error;
//     }
//   }
// }

// export default new PlayersService();
