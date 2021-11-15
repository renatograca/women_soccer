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
        type: Sequelize.NUMBER,
        references: { model: 'clubs', key: 'club_id' },
      },
      club_id_2: {
        type: Sequelize.NUMBER,
        references: { model: 'clubs', key: 'club_id' },
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
    await queryInterface.dropTable('matches');
  },
};
