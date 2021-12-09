// const puppeteer = require('puppeteer');
const mysql = require('mysql2/promise');

const bluebird = require('bluebird');

const BASE_URL = 'http://localhost:3000';

describe('1 -testando conexão', () => {
  let connection;
  beforeAll(() => {
    connection = mysql.createPool({
      host: 'localhost', user: 'root', database: 'women_soccer', password: '123456',
    });
    if (!connection.getConnection()) {
      throw new Error('"Não foi possivel estabelecer uma conexão');
    }
  });
  afterAll(() => { connection.end(); });

  test('testando', async (done) => {
    const [rows, fields] = await connection.execute('SELECT * FROM `clubs` ;');
    console.log({ fields });
    // , (err, results, fields) => {
    //   console.log(results);
    //   console.log(fields);
    //   console.log(err);
    //   expect(results).to.eq(true);
    // });
    // done();
  });
});

// const mysql = require('mysql2/promise');

// async function main() {
//   // get the client
//   // create the connection
//   const connection = await mysql.createConnection({
//     host: 'localhost', user: 'root', database: 'women_soccer', password: '123456',
//   });
//   // query database
//   const [rows, fields] = await connection.execute('SELECT * FROM `clubs`', []);

//   console.log({ rows, fields });
//   console.log('nao mostra nada');
// }

// main();
