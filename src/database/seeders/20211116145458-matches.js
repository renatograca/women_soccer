module.exports = {
  up: async (queryInterface) => {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert(
      'matches',
      [
        {
          homeTeam: 16,
          homeTeamGoals: 1,
          awayTeam: 8,
          awayTeamGoals: 1,
        },
        {
          homeTeam: 9,
          homeTeamGoals: 1,
          awayTeam: 14,
          awayTeamGoals: 1,
        },
        {
          homeTeam: 4,
          homeTeamGoals: 3,
          awayTeam: 11,
          awayTeamGoals: 0,
        },
        {
          homeTeam: 3,
          homeTeamGoals: 0,
          awayTeam: 2,
          awayTeamGoals: 0,
        },
        {
          homeTeam: 7,
          homeTeamGoals: 1,
          awayTeam: 10,
          awayTeamGoals: 1,
        },
        {
          homeTeam: 5,
          homeTeamGoals: 1,
          awayTeam: 13,
          awayTeamGoals: 1,
        },
        {
          homeTeam: 12,
          homeTeamGoals: 2,
          awayTeam: 6,
          awayTeamGoals: 2,
        },
        {
          homeTeam: 15,
          homeTeamGoals: 0,
          awayTeam: 1,
          awayTeamGoals: 1,
        },
        {
          homeTeam: 1,
          homeTeamGoals: 0,
          awayTeam: 12,
          awayTeamGoals: 3,
        },
        {
          homeTeam: 2,
          homeTeamGoals: 0,
          awayTeam: 9,
          awayTeamGoals: 2,
        },
        {
          homeTeam: 13,
          homeTeamGoals: 1,
          awayTeam: 3,
          awayTeamGoals: 0,
        },
        {
          homeTeam: 6,
          homeTeamGoals: 0,
          awayTeam: 4,
          awayTeamGoals: 1,
        },
        {
          homeTeam: 8,
          homeTeamGoals: 2,
          awayTeam: 5,
          awayTeamGoals: 1,
        },
        {
          homeTeam: 14,
          homeTeamGoals: 2,
          awayTeam: 16,
          awayTeamGoals: 1,
        },
        {
          homeTeam: 10,
          homeTeamGoals: 0,
          awayTeam: 15,
          awayTeamGoals: 1,
        },
        {
          homeTeam: 11,
          homeTeamGoals: 0,
          awayTeam: 7,
          awayTeamGoals: 0,
        },
        {
          homeTeam: 1,
          homeTeamGoals: 2,
          awayTeam: 8,
          awayTeamGoals: 3,
        },
        {
          homeTeam: 12,
          homeTeamGoals: 4,
          awayTeam: 5,
          awayTeamGoals: 2,
        },
        {
          homeTeam: 11,
          homeTeamGoals: 2,
          awayTeam: 2,
          awayTeamGoals: 2,
        },
        {
          homeTeam: 7,
          homeTeamGoals: 0,
          awayTeam: 9,
          awayTeamGoals: 1,
        },
        {
          homeTeam: 6,
          homeTeamGoals: 3,
          awayTeam: 13,
          awayTeamGoals: 1,
        },
        {
          homeTeam: 4,
          homeTeamGoals: 3,
          awayTeam: 3,
          awayTeamGoals: 1,
        },
        {
          homeTeam: 15,
          homeTeamGoals: 2,
          awayTeam: 16,
          awayTeamGoals: 3,
        },
        {
          homeTeam: 10,
          homeTeamGoals: 2,
          awayTeam: 14,
          awayTeamGoals: 2,
        },
        {
          homeTeam: 2,
          homeTeamGoals: 0,
          awayTeam: 6,
          awayTeamGoals: 1,
        },
        {
          homeTeam: 13,
          homeTeamGoals: 1,
          awayTeam: 1,
          awayTeamGoals: 0,
        },
        {
          homeTeam: 5,
          homeTeamGoals: 1,
          awayTeam: 15,
          awayTeamGoals: 2,
        },
        {
          homeTeam: 16,
          homeTeamGoals: 3,
          awayTeam: 7,
          awayTeamGoals: 0,
        },
        {
          homeTeam: 9,
          homeTeamGoals: 0,
          awayTeam: 4,
          awayTeamGoals: 4,
        },
        {
          homeTeam: 3,
          homeTeamGoals: 0,
          awayTeam: 12,
          awayTeamGoals: 4,
        },
        {
          homeTeam: 8,
          homeTeamGoals: 2,
          awayTeam: 10,
          awayTeamGoals: 0,
        },
        {
          homeTeam: 14,
          homeTeamGoals: 5,
          awayTeam: 11,
          awayTeamGoals: 1,
        },
        {
          homeTeam: 1,
          homeTeamGoals: 1,
          awayTeam: 16,
          awayTeamGoals: 1,
        },
        {
          homeTeam: 9,
          homeTeamGoals: 3,
          awayTeam: 6,
          awayTeamGoals: 1,
        },
        {
          homeTeam: 10,
          homeTeamGoals: 1,
          awayTeam: 5,
          awayTeamGoals: 3,
        },
        {
          homeTeam: 2,
          homeTeamGoals: 0,
          awayTeam: 7,
          awayTeamGoals: 1,
        },
        {
          homeTeam: 15,
          homeTeamGoals: 0,
          awayTeam: 13,
          awayTeamGoals: 1,
        },
        {
          homeTeam: 14,
          homeTeamGoals: 2,
          awayTeam: 4,
          awayTeamGoals: 1,
        },
        {
          homeTeam: 3,
          homeTeamGoals: 2,
          awayTeam: 11,
          awayTeamGoals: 0,
        },
        {
          homeTeam: 12,
          homeTeamGoals: 4,
          awayTeam: 8,
          awayTeamGoals: 1,
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
    await queryInterface.bulkDelete('matches', null, {});
  },
};
