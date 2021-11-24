module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('matches', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
<<<<<<< HEAD
      homeTeam: {
=======
      home_team: {
>>>>>>> 989b324d4c15d73fd410e7c2975c8fb4d4003004
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'clubs', key: 'id' },
      },
<<<<<<< HEAD
      homeTeamGoals: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      awayTeam: {
=======
      home_team_goals: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      away_team: {
>>>>>>> 989b324d4c15d73fd410e7c2975c8fb4d4003004
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'clubs', key: 'id' },
      },
<<<<<<< HEAD
      awayTeamGoals: {
=======
      away_team_goals: {
>>>>>>> 989b324d4c15d73fd410e7c2975c8fb4d4003004
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      is_match_over: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('matches');
  },
};
