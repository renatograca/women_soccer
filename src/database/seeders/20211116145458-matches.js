module.exports = {
  up: async (queryInterface) => {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert('matches', [
      {
        match_id: 1,
        club_id_1: 16,
        club_id_2: 8,
        match_round: 1,
      },
      {
        match_id: 2,
        club_id_1: 9,
        club_id_2: 14,
        match_round: 1,
      },
      {
        match_id: 3,
        club_id_1: 4,
        club_id_2: 11,
        match_round: 1,
      },
      {
        match_id: 4,
        club_id_1: 3,
        club_id_2: 2,
        match_round: 1,
      },
      {
        match_id: 5,
        club_id_1: 7,
        club_id_2: 10,
        match_round: 1,
      },
      {
        match_id: 6,
        club_id_1: 5,
        club_id_2: 13,
        match_round: 1,
      },
      {
        match_id: 7,
        club_id_1: 12,
        club_id_2: 6,
        match_round: 1,
      },
      {
        match_id: 8,
        club_id_1: 15,
        club_id_2: 1,
        match_round: 1,
      },
      {
        match_id: 9,
        club_id_1: 1,
        club_id_2: 12,
        match_round: 2,
      },
      {
        match_id: 10,
        club_id_1: 2,
        club_id_2: 9,
        match_round: 2,
      },
      {
        match_id: 11,
        club_id_1: 13,
        club_id_2: 3,
        match_round: 2,
      },
      {
        match_id: 12,
        club_id_1: 6,
        club_id_2: 4,
        match_round: 2,
      },
      {
        match_id: 13,
        club_id_1: 8,
        club_id_2: 5,
        match_round: 2,
      },
      {
        match_id: 14,
        club_id_1: 14,
        club_id_2: 16,
        match_round: 2,
      },
      {
        match_id: 15,
        club_id_1: 10,
        club_id_2: 15,
        match_round: 2,
      },
      {
        match_id: 16,
        club_id_1: 11,
        club_id_2: 7,
        match_round: 2,
      },
      {
        match_id: 17,
        club_id_1: 1,
        club_id_2: 8,
        match_round: 3,
      },
      {
        match_id: 18,
        club_id_1: 12,
        club_id_2: 5,
        match_round: 3,
      },
      {
        match_id: 19,
        club_id_1: 11,
        club_id_2: 2,
        match_round: 3,
      },
      {
        match_id: 20,
        club_id_1: 7,
        club_id_2: 9,
        match_round: 3,
      },
      {
        match_id: 21,
        club_id_1: 6,
        club_id_2: 13,
        match_round: 3,
      },
      {
        match_id: 22,
        club_id_1: 4,
        club_id_2: 3,
        match_round: 3,
      },
      {
        match_id: 23,
        club_id_1: 15,
        club_id_2: 16,
        match_round: 3,
      },
      {
        match_id: 24,
        club_id_1: 10,
        club_id_2: 14,
        match_round: 3,
      },
      {
        match_id: 25,
        club_id_1: 2,
        club_id_2: 6,
        match_round: 4,
      },
      {
        match_id: 26,
        club_id_1: 13,
        club_id_2: 1,
        match_round: 4,
      },
      {
        match_id: 27,
        club_id_1: 5,
        club_id_2: 15,
        match_round: 4,
      },
      {
        match_id: 28,
        club_id_1: 16,
        club_id_2: 7,
        match_round: 4,
      },
      {
        match_id: 29,
        club_id_1: 9,
        club_id_2: 4,
        match_round: 4,
      },
      {
        match_id: 30,
        club_id_1: 3,
        club_id_2: 12,
        match_round: 4,
      },
      {
        match_id: 31,
        club_id_1: 8,
        club_id_2: 10,
        match_round: 4,
      },
      {
        match_id: 32,
        club_id_1: 14,
        club_id_2: 11,
        match_round: 4,
      },
      {
        match_id: 33,
        club_id_1: 1,
        club_id_2: 16,
        match_round: 5,
      },
      {
        match_id: 34,
        club_id_1: 9,
        club_id_2: 6,
        match_round: 5,
      },
      {
        match_id: 35,
        club_id_1: 10,
        club_id_2: 5,
        match_round: 5,
      },
      {
        match_id: 36,
        club_id_1: 2,
        club_id_2: 7,
        match_round: 5,
      },
      {
        match_id: 37,
        club_id_1: 15,
        club_id_2: 13,
        match_round: 5,
      },
      {
        match_id: 38,
        club_id_1: 14,
        club_id_2: 4,
        match_round: 5,
      },
      {
        match_id: 39,
        club_id_1: 3,
        club_id_2: 11,
        match_round: 5,
      },
      {
        match_id: 40,
        club_id_1: 12,
        club_id_2: 8,
        match_round: 5,
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
