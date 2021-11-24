module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('players', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      playerName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      position: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      clubId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'clubs', key: 'id' },
      },
      goals: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('players');
  },
};
