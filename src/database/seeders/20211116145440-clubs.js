module.exports = {
  up: async (queryInterface) => {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert(
      'clubs',
      [
        {
          clubName: 'Avaí/Kindermann',
        },
        {
          clubName: 'Bahia',
        },
        {
          clubName: 'Botafogo',
        },
        {
          clubName: 'Corinthians',
        },
        {
          clubName: 'Cruzeiro',
        },
        {
          clubName: 'Ferroviária',
        },
        {
          clubName: 'Flamengo',
        },
        {
          clubName: 'Grêmio',
        },
        {
          clubName: 'Internacional',
        },
        {
          clubName: 'Minas Brasília',
        },
        {
          clubName: 'Napoli-SC',
        },
        {
          clubName: 'Palmeiras',
        },
        {
          clubName: 'Real Brasília',
        },
        {
          clubName: 'Santos',
        },
        {
          clubName: 'São José-SP',
        },
        {
          clubName: 'São Paulo',
        },
      ],
      {},
    );
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
