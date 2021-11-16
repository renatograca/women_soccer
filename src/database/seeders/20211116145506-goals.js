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
        match_round: 1,
      },
      {
        player_id: 211,
        match_round: 1,
      },
      {
        player_id: 242,
        match_round: 1,
      },
      {
        player_id: 367,
        match_round: 1,
      },
      {
        player_id: 63,
        match_round: 1,
      },
      {
        player_id: 185,
        match_round: 1,
      },
      {
        player_id: 272,
        match_round: 1,
      },
      {
        player_id: 110,
        match_round: 1,
      },
      {
        player_id: 312,
        match_round: 1,
      },
      {
        player_id: 147,
        match_round: 1,
      },
      {
        player_id: 19,
        match_round: 1,
      },
      {
        player_id: 312,
        match_round: 2,
      },
      {
        player_id: 242,
        match_round: 2,
      },
      {
        player_id: 341,
        match_round: 2,
      },
      {
        player_id: 63,
        match_round: 2,
      },
      {
        player_id: 211,
        match_round: 2,
      },
      {
        player_id: 367,
        match_round: 2,
      },
      {
        player_id: 424,
        match_round: 2,
      },
      {
        player_id: 403,
        match_round: 2,
      },
      {
        player_id: 19,
        match_round: 3,
      },
      {
        player_id: 211,
        match_round: 3,
      },
      {
        player_id: 312,
        match_round: 3,
      },
      {
        player_id: 110,
        match_round: 3,
      },
      {
        player_id: 287,
        match_round: 3,
      },
      {
        player_id: 37,
        match_round: 3,
      },
      {
        player_id: 242,
        match_round: 3,
      },
      {
        player_id: 147,
        match_round: 3,
      },
      {
        player_id: 341,
        match_round: 3,
      },
      {
        player_id: 63,
        match_round: 3,
      },
      {
        player_id: 67,
        match_round: 3,
      },
      {
        player_id: 403,
        match_round: 3,
      },
      {
        player_id: 424,
        match_round: 3,
      },
      {
        player_id: 272,
        match_round: 3,
      },
      {
        player_id: 367,
        match_round: 3,
      },
      {
        player_id: 147,
        match_round: 4,
      },
      {
        player_id: 341,
        match_round: 4,
      },
      {
        player_id: 110,
        match_round: 4,
      },
      {
        player_id: 403,
        match_round: 4,
      },
      {
        player_id: 424,
        match_round: 4,
      },
      {
        player_id: 63,
        match_round: 4,
      },
      {
        player_id: 312,
        match_round: 4,
      },
      {
        player_id: 211,
        match_round: 4,
      },
      {
        player_id: 367,
        match_round: 4,
      },
      {
        player_id: 287,
        match_round: 4,
      },
      {
        player_id: 19,
        match_round: 5,
      },
      {
        player_id: 424,
        match_round: 5,
      },
      {
        player_id: 242,
        match_round: 5,
      },
      {
        player_id: 147,
        match_round: 5,
      },
      {
        player_id: 272,
        match_round: 5,
      },
      {
        player_id: 110,
        match_round: 5,
      },
      {
        player_id: 185,
        match_round: 5,
      },
      {
        player_id: 341,
        match_round: 5,
      },
      {
        player_id: 367,
        match_round: 5,
      },
      {
        player_id: 63,
        match_round: 5,
      },
      {
        player_id: 67,
        match_round: 5,
      },
      {
        player_id: 312,
        match_round: 5,
      },
      {
        player_id: 211,
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
    await queryInterface.bulkDelete('goals', null, {});
  },
};
