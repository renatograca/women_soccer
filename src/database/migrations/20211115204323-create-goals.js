module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('goals', {
      player_id: {
        allowNull: false,
        primaryKey: true,
        default: 0,
        type: Sequelize.INTEGER,
        references: { model: 'players', key: 'player_id' },
      },
      match_id: {
        type: Sequelize.NUMBER,
        references: { model: 'matches', key: 'match_id' },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('goals');
  },
};
