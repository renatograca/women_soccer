module.exports = {
  up: async (queryInterface) => {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert('users', [{
      username: 'renato',
      role: 'admin',
      email: 'renato@email.com',
      password: '$2a$08$LZvXyfNVVWr65SaBueSe.O3mFah/JVPKDChCbScC4vyCcKM2iMe8G',
    }], {});
  },

  down: async (queryInterface) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete('users', null, {});
  },
};
