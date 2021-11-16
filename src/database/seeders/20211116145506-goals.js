module.exports = {
  up: async (queryInterface) => {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert('goals', [
      {
        player_id: 424,
        match_id: 1,
      },
      {
        player_id: 211,
        match_id: 1,
      },
      {
        player_id: 242,
        match_id: 1,
      },
      {
        player_id: 367,
        match_id: 1,
      },
      {
        player_id: 63,
        match_id: 1,
      },
      {
        player_id: 185,
        match_id: 1,
      },
      {
        player_id: 272,
        match_id: 1,
      },
      {
        player_id: 110,
        match_id: 1,
      },
      {
        player_id: 312,
        match_id: 1,
      },
      {
        player_id: 147,
        match_id: 1,
      },
      {
        player_id: 19,
        match_id: 1,
      },
      {
        player_id: 312,
        match_id: 2,
      },
      {
        player_id: 242,
        match_id: 2,
      },
      {
        player_id: 341,
        match_id: 2,
      },
      {
        player_id: 63,
        match_id: 2,
      },
      {
        player_id: 211,
        match_id: 2,
      },
      {
        player_id: 367,
        match_id: 2,
      },
      {
        player_id: 424,
        match_id: 2,
      },
      {
        player_id: 403,
        match_id: 2,
      },
      {
        player_id: 19,
        match_id: 3,
      },
      {
        player_id: 211,
        match_id: 3,
      },
      {
        player_id: 312,
        match_id: 3,
      },
      {
        player_id: 110,
        match_id: 3,
      },
      {
        player_id: 287,
        match_id: 3,
      },
      {
        player_id: 37,
        match_id: 3,
      },
      {
        player_id: 242,
        match_id: 3,
      },
      {
        player_id: 147,
        match_id: 3,
      },
      {
        player_id: 341,
        match_id: 3,
      },
      {
        player_id: 63,
        match_id: 3,
      },
      {
        player_id: 67,
        match_id: 3,
      },
      {
        player_id: 403,
        match_id: 3,
      },
      {
        player_id: 424,
        match_id: 3,
      },
      {
        player_id: 272,
        match_id: 3,
      },
      {
        player_id: 367,
        match_id: 3,
      },
      {
        player_id: 147,
        match_id: 4,
      },
      {
        player_id: 341,
        match_id: 4,
      },
      {
        player_id: 110,
        match_id: 4,
      },
      {
        player_id: 403,
        match_id: 4,
      },
      {
        player_id: 424,
        match_id: 4,
      },
      {
        player_id: 63,
        match_id: 4,
      },
      {
        player_id: 312,
        match_id: 4,
      },
      {
        player_id: 211,
        match_id: 4,
      },
      {
        player_id: 367,
        match_id: 4,
      },
      {
        player_id: 287,
        match_id: 4,
      },
      {
        player_id: 19,
        match_id: 5,
      },
      {
        player_id: 424,
        match_id: 5,
      },
      {
        player_id: 242,
        match_id: 5,
      },
      {
        player_id: 147,
        match_id: 5,
      },
      {
        player_id: 272,
        match_id: 5,
      },
      {
        player_id: 110,
        match_id: 5,
      },
      {
        player_id: 185,
        match_id: 5,
      },
      {
        player_id: 341,
        match_id: 5,
      },
      {
        player_id: 367,
        match_id: 5,
      },
      {
        player_id: 63,
        match_id: 5,
      },
      {
        player_id: 67,
        match_id: 5,
      },
      {
        player_id: 312,
        match_id: 5,
      },
      {
        player_id: 211,
        match_id: 5,
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
