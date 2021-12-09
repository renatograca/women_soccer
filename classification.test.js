// const puppeteer = require('puppeteer');
const mysql = require('mysql2');

const BASE_URL = 'http://localhost:3000';

describe('1 - Verifica a tabela de ScoreBoard', () => {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'women_soccer',
    password: 123456,
  });

  test('testando', () => {
    connection.query('SELECT * FROM clubs', (err, results, fields) => {
      console.log(results);
      console.log(fields);
      console.log(err);
    });
    expect();
  });
});
