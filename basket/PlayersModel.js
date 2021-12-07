// import { Model, STRING, INTEGER } from 'sequelize';
// import db from '.';
// import Clubs from './ClubsModel';

// class Players extends Model {
//   public id!: number;

//   public playerName!: string;

//   public position!: string;

//   public clubId!: number;

//   public goals!: number;
// }

// Players.init({
//   id: {
//     type: INTEGER,
//     allowNull: false,
//     primaryKey: true,
//     autoIncrement: true,
//   },
//   playerName: {
//     type: STRING,
//     allowNull: false,
//   },
//   position: {
//     type: STRING,
//     allowNull: false,
//   },
//   clubId: {
//     type: INTEGER,
//     allowNull: false,
//   },
//   goals: {
//     type: INTEGER,
//     allowNull: false,
//   },
// }, {
//   underscored: true,
//   sequelize: db.connection,
//   modelName: 'players',
//   timestamps: false,
// });
// Players.belongsTo(Clubs, { foreignKey: 'id', as: 'club' });

// Clubs.hasMany(Players, {
//   foreignKey: 'clubId',
//   as: 'player',
// });

// export default Players;
