module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('players', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      player_name: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'player_name',
      },
      position: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      club_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'club_id',
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
