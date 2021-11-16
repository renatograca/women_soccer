module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('matches', {
      match_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      club_id_1: {
        type: Sequelize.INTEGER,
        references: { model: 'clubs', key: 'club_id' },
      },
      club_id_2: {
        type: Sequelize.INTEGER,
        references: { model: 'clubs', key: 'club_id' },
      },
      match_round: {
        type: Sequelize.INTEGER,
      },

    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('matches');
  },
};
