module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('players', {
      player_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      player_name: {
        type: Sequelize.STRING,
      },
      club_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'clubs', key: 'club_id' },
      },

    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('players');
  },
};
