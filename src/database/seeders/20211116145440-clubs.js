module.exports = {
  up: async (queryInterface) => {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert('clubs', [
      {
        club_id: 1,
        club_name: 'Avaí/Kindermann',
      },
      {
        club_id: 2,
        club_name: 'Bahia',
      },
      {
        club_id: 3,
        club_name: 'Botafogo',
      },
      {
        club_id: 4,
        club_name: 'Corinthians',
      },
      {
        club_id: 5,
        club_name: 'Cruzeiro',
      },
      {
        club_id: 6,
        club_name: 'Ferroviária',
      },
      {
        club_id: 7,
        club_name: 'Flamengo',
      },
      {
        club_id: 8,
        club_name: 'Grêmio',
      },
      {
        club_id: 9,
        club_name: 'Internacional',
      },
      {
        club_id: 10,
        club_name: 'Minas Brasília',
      },
      {
        club_id: 11,
        club_name: 'Napoli-SC',
      },
      {
        club_id: 12,
        club_name: 'Palmeiras',
      },
      {
        club_id: 13,
        club_name: 'Real Brasília',
      },
      {
        club_id: 14,
        club_name: 'Santos',
      },
      {
        club_id: 15,
        club_name: 'São José-SP',
      },
      {
        club_id: 16,
        club_name: 'São Paulo',
      },
    ], {});
  },

  down: async (queryInterface) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete('clubs', null, {});
  },
};
