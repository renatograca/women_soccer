module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('goals', {
      player_id: {
        allowNull: false,
        primaryKey: true,
        default: 0,
        type: Sequelize.INTEGER,
        references: { model: 'players', key: 'id' },
      },
      match_id: {
        type: Sequelize.INTEGER,
        references: { model: 'matches', key: 'id' },
      },

    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('goals');
  },
};
