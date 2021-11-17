module.exports = {
  up: async (queryInterface) => {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert('goals', [
      {
        match_id: 1,
        player_id: 424,
      },
      {
        match_id: 1,
        player_id: 211,
      },
      {
        match_id: 2,
        player_id: 242,
      },
      {
        match_id: 2,
        player_id: 367,
      },
      {
        match_id: 4,
        player_id: 63,
      },
      {
        match_id: 5,
        player_id: 185,
      },
      {
        match_id: 5,
        player_id: 272,
      },
      {
        match_id: 6,
        player_id: 110,
      },
      {
        match_id: 7,
        player_id: 312,
      },
      {
        match_id: 7,
        player_id: 147,
      },
      {
        match_id: 9,
        player_id: 19,
      },
      {
        match_id: 9,
        player_id: 312,
      },
      {
        match_id: 10,
        player_id: 242,
      },
      {
        match_id: 11,
        player_id: 341,
      },
      {
        match_id: 11,
        player_id: 63,
      },
      {
        match_id: 13,
        player_id: 211,
      },
      {
        match_id: 14,
        player_id: 367,
      },
      {
        match_id: 14,
        player_id: 424,
      },
      {
        match_id: 15,
        player_id: 403,
      },
      {
        match_id: 17,
        player_id: 19,
      },
      {
        match_id: 17,
        player_id: 211,
      },
      {
        match_id: 18,
        player_id: 312,
      },
      {
        match_id: 18,
        player_id: 110,
      },
      {
        match_id: 19,
        player_id: 287,
      },
      {
        match_id: 19,
        player_id: 37,
      },
      {
        match_id: 20,
        player_id: 242,
      },
      {
        match_id: 21,
        player_id: 147,
      },
      {
        match_id: 21,
        player_id: 341,
      },
      {
        match_id: 22,
        player_id: 63,
      },
      {
        match_id: 22,
        player_id: 67,
      },
      {
        match_id: 23,
        player_id: 403,
      },
      {
        match_id: 23,
        player_id: 424,
      },
      {
        match_id: 24,
        player_id: 272,
      },
      {
        match_id: 24,
        player_id: 367,
      },
      {
        match_id: 25,
        player_id: 147,
      },
      {
        match_id: 26,
        player_id: 341,
      },
      {
        match_id: 27,
        player_id: 110,
      },
      {
        match_id: 27,
        player_id: 403,
      },
      {
        match_id: 28,
        player_id: 424,
      },
      {
        match_id: 30,
        player_id: 63,
      },
      {
        match_id: 30,
        player_id: 312,
      },
      {
        match_id: 31,
        player_id: 211,
      },
      {
        match_id: 32,
        player_id: 367,
      },
      {
        match_id: 32,
        player_id: 287,
      },
      {
        match_id: 33,
        player_id: 19,
      },
      {
        match_id: 33,
        player_id: 424,
      },
      {
        match_id: 34,
        player_id: 242,
      },
      {
        match_id: 34,
        player_id: 147,
      },
      {
        match_id: 35,
        player_id: 272,
      },
      {
        match_id: 35,
        player_id: 110,
      },
      {
        match_id: 36,
        player_id: 185,
      },
      {
        match_id: 37,
        player_id: 341,
      },
      {
        match_id: 38,
        player_id: 367,
      },
      {
        match_id: 39,
        player_id: 63,
      },
      {
        match_id: 39,
        player_id: 67,
      },
      {
        match_id: 40,
        player_id: 312,
      },
      {
        match_id: 40,
        player_id: 211,
      },
    ], {});
  },

  down: async (queryInterface) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete('goals', null, {});
  },
};
