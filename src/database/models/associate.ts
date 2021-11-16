// import Clubs from './clubs';
// import Players from './players';

// // Players.belongsTo(Clubs, {
// //   foreignKey: 'club_id',
// //   as: 'club',
// // });

// // Clubs.hasMany(Players, {
// //   foreignKey: 'club_id',
// //   as: 'players',
// // });

// Players.belongsTo(Clubs, { targetKey: 'club_id' });
// Clubs.hasMany(Players, {
//   sourceKey: 'id',
//   foreignKey: 'ownerId',
//   as: 'projects', // this determines the name in `associations`!
// });
