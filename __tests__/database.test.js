const { Sequelize } = require('sequelize');
const util = require('util');
const { exec: callbackExec } = require('child_process');

const exec = util.promisify(callbackExec)

describe('Desafios iniciais', () => {
  let sequelize;

  beforeAll(async () => {
    await exec('cd app/backend && npm run db:reset')
    sequelize = new Sequelize('WOMEN_SOCCER', 'SamuelMelo', '12345678', { host: 'localhost', dialect: 'mysql' });
  });

  afterAll(async () => {
    await sequelize.query('DROP DATABASE WOMEN_SOCCER;', { type: 'RAW' });
    sequelize.close();
  });

  describe("1 - Verifica se as tabelas foram criadas com sucesso", () => {
    it('Verifica a tabela de clubes', async () => {
      const challengeQuery = 'SELECT * FROM WOMEN_SOCCER.clubs;';
      const expectedResult = require('./clubs.js');

      expect(await sequelize.query(challengeQuery, { type: 'SELECT' })).toEqual(expectedResult);
    });
  });
});
