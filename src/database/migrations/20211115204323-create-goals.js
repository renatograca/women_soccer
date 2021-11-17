module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('goals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      player_id: {
        type: Sequelize.INTEGER,
        references: { model: 'players', key: 'id' },
      },
      match_id: {
        type: Sequelize.INTEGER,
        references: { model: 'matches', key: 'id' },
      },
      goal_way: {
        type: Sequelize.STRING,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('goals');
  },
};
