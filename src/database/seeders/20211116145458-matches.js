module.exports = {
  up: async (queryInterface) => {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert('matches', [
      {
        club_id_1: 16,
        club_id_2: 8,
      },
      {
        club_id_1: 9,
        club_id_2: 14,
      },
      {
        club_id_1: 4,
        club_id_2: 11,
      },
      {
        club_id_1: 3,
        club_id_2: 2,
      },
      {
        club_id_1: 7,
        club_id_2: 10,
      },
      {
        club_id_1: 5,
        club_id_2: 13,
      },
      {
        club_id_1: 12,
        club_id_2: 6,
      },
      {
        club_id_1: 15,
        club_id_2: 1,
      },
      {
        club_id_1: 1,
        club_id_2: 12,
      },
      {
        club_id_1: 2,
        club_id_2: 9,
      },
      {
        club_id_1: 13,
        club_id_2: 3,
      },
      {
        club_id_1: 6,
        club_id_2: 4,
      },
      {
        club_id_1: 8,
        club_id_2: 5,
      },
      {
        club_id_1: 14,
        club_id_2: 16,
      },
      {
        club_id_1: 10,
        club_id_2: 15,
      },
      {
        club_id_1: 11,
        club_id_2: 7,
      },
      {
        club_id_1: 1,
        club_id_2: 8,
      },
      {
        club_id_1: 12,
        club_id_2: 5,
      },
      {
        club_id_1: 11,
        club_id_2: 2,
      },
      {
        club_id_1: 7,
        club_id_2: 9,
      },
      {
        club_id_1: 6,
        club_id_2: 13,
      },
      {
        club_id_1: 4,
        club_id_2: 3,
      },
      {
        club_id_1: 15,
        club_id_2: 16,
      },
      {
        club_id_1: 10,
        club_id_2: 14,
      },
      {
        club_id_1: 2,
        club_id_2: 6,
      },
      {
        club_id_1: 13,
        club_id_2: 1,
      },
      {
        club_id_1: 5,
        club_id_2: 15,
      },
      {
        club_id_1: 16,
        club_id_2: 7,
      },
      {
        club_id_1: 9,
        club_id_2: 4,
      },
      {
        club_id_1: 3,
        club_id_2: 12,
      },
      {
        club_id_1: 8,
        club_id_2: 10,
      },
      {
        club_id_1: 14,
        club_id_2: 11,
      },
      {
        club_id_1: 1,
        club_id_2: 16,
      },
      {
        club_id_1: 9,
        club_id_2: 6,
      },
      {
        club_id_1: 10,
        club_id_2: 5,
      },
      {
        club_id_1: 2,
        club_id_2: 7,
      },
      {
        club_id_1: 15,
        club_id_2: 13,
      },
      {
        club_id_1: 14,
        club_id_2: 4,
      },
      {
        club_id_1: 3,
        club_id_2: 11,
      },
      {
        club_id_1: 12,
        club_id_2: 8,
      },
    ], {});
  },

  down: async (queryInterface) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete('matches', null, {});
  },
};
