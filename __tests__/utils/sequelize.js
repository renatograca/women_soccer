const { Sequelize } = require('sequelize');
const { exec: callbackExec } = require('child_process');
const util = require('util');

const exec = util.promisify(callbackExec);

async function connection() {
  await exec('npm run db:reset');

  const sequelize = new Sequelize('women_soccer', 'root', '123456', { host: 'localhost', dialect: 'mysql' });

  const validate = await sequelize.query('SELECT 1+1 as result', { type: 'SELECT' });

  expect(validate[0]).toHaveProperty('result', 2);

  return sequelize;
}

module.exports = connection;
