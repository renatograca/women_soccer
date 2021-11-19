module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('matches', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      club_id_1: {
        type: Sequelize.INTEGER,
        references: { model: 'clubs', key: 'id' },
      },
      club_1_goals: {
        type: Sequelize.INTEGER,
      },
      club_id_2: {
        type: Sequelize.INTEGER,
        references: { model: 'clubs', key: 'id' },
      },
      club_2_goals: {
        type: Sequelize.INTEGER,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('matches');
  },
};
