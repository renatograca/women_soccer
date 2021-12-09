const sequelize = require('./utils/sequelize');
const { users, clubs, matches } = require('./expected_results/women_soccer');

describe('Desafios iniciais', () => {
  let database;

  beforeAll(async () => {
    database = await sequelize();
  });

  afterAll(async () => {
    await database.query('DROP DATABASE women_soccer;', { type: 'RAW' });
    database.close();
  });

  describe('1 - Verifica se as tabelas foram criadas com sucesso', () => {
    it('Verifica a tabela de clubes', async () => {
      const challengeQuery = 'SELECT * FROM clubs;';
      const resultQuery = await database.query(challengeQuery, { type: 'SELECT' });

      expect(resultQuery).toEqual(clubs);
    });
    it('Verifica a tabela de matches', async () => {
      const challengeQuery = 'SELECT * FROM matches;';
      const resultQuery = await database.query(challengeQuery, { type: 'SELECT' });

      expect(resultQuery).toEqual(matches);
    });
    it('Verifica a tabela de users', async () => {
      const challengeQuery = 'SELECT * FROM users;';
      const resultQuery = await database.query(challengeQuery, { type: 'SELECT' });

      expect(resultQuery).toEqual(users);
    });
  });
});
