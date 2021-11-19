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
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'clubs', key: 'id' },
      },
      club_1_goals: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      club_id_2: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'clubs', key: 'id' },
      },
      club_2_goals: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('matches');
  },
};
