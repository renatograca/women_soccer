const puppeteer = require('puppeteer');

const BASE_URL = "http://localhost:3000";

describe('1 - Verifica a tabela de ScoreBoard', () => {
  let browser;
  let page;

  beforeEach(async (done) => {
    browser = await puppeteer.launch({
      args: [
        '--no-sandbox',
        '--disable-gpu',
        '--disable-dev-shm-usage',
        '--window-size=1920,1080'
      ],
      headless: false
    });
    page = await browser.newPage();
    done();
  })

  afterEach(async (done) => {
    await browser.close();
    done();
  })

  it ('O Header ta tabela possui os campos corretos', async () => {
    await page.goto(`${BASE_URL}/leaderboard`);
    await page.waitForSelector('table thead tr th');
    
    const scoreBoardTableHeaderMock = ['Classificação', 'P', 'J', 'V', 'E', 'D', 'GP', 'GC', 'SG', '%'];

    const scoreBoardTableHeader = await page.$$eval('table thead tr th', ths => ths.map((th) => {
      return th.innerText;
    }));

    // Fazer um expect(checkTable).toBe(true) deixa o código menor porém acredito que possa atrapalhar o estudante a encontrar um possível erro.
    // const checkTable = scoreBoardTableHeader.every((th) => scoreBoardTableHeaderMock.includes(th))

    expect(scoreBoardTableHeader).toHaveLength(10);
    expect(scoreBoardTableHeader[0]).toEqual(scoreBoardTableHeaderMock[0]);
    expect(scoreBoardTableHeader[1]).toEqual(scoreBoardTableHeaderMock[1]);
    expect(scoreBoardTableHeader[2]).toEqual(scoreBoardTableHeaderMock[2]);
    expect(scoreBoardTableHeader[3]).toEqual(scoreBoardTableHeaderMock[3]);
    expect(scoreBoardTableHeader[4]).toEqual(scoreBoardTableHeaderMock[4]);
    expect(scoreBoardTableHeader[5]).toEqual(scoreBoardTableHeaderMock[5]);
    expect(scoreBoardTableHeader[6]).toEqual(scoreBoardTableHeaderMock[6]);
    expect(scoreBoardTableHeader[7]).toEqual(scoreBoardTableHeaderMock[7]);
    expect(scoreBoardTableHeader[8]).toEqual(scoreBoardTableHeaderMock[8]);
    expect(scoreBoardTableHeader[9]).toEqual(scoreBoardTableHeaderMock[9]);
  });
});
