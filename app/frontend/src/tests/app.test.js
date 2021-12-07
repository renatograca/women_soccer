const puppeteer = require('puppeteer');

const BASE_URL = 'http://localhost:3000';

describe('1 - Verifica a tabela de ScoreBoard', () => {
  let browser;
  let page;

  beforeEach(async (done) => {
    browser = await puppeteer.launch({
      args: [
        '--no-sandbox',
        '--disable-gpu',
        '--disable-dev-shm-usage',
        '--window-size=1920,1080',
      ],
      headless: true,
    });
    page = await browser.newPage();
    done();
  });

  afterEach(async (done) => {
    await browser.close();
    done();
  });

  it('O Header ta tabela possui os campos corretos', async () => {
    await page.goto(`${BASE_URL}/leaderboard`);
    await page.waitForSelector('[data-testid="leaderboardTable-header"]');

    const scoreBoardTableHeaderMock = ['Classificação', 'P', 'J', 'V', 'E', 'D', 'GP', 'GC', 'SG', '%'];

    const scoreBoardTableHeader = await page.$$eval('[data-testid="leaderboardTable-header"] tr th', (ths) => ths.map((th) => th.innerText));
    expect(scoreBoardTableHeader).toHaveLength(10);

    const classificationTh = await page.$eval('[data-testid="classification"]', (th) => th.innerText);
    const totalPointsTh = await page.$eval('[data-testid="total-points"]', (th) => th.innerText);
    const totalGamesTh = await page.$eval('[data-testid="total-games"]', (th) => th.innerText);
    const totalVictoriesTh = await page.$eval('[data-testid="total-victories"]', (th) => th.innerText);
    const totalDrawsTh = await page.$eval('[data-testid="total-draws"]', (th) => th.innerText);
    const totalLoosesTh = await page.$eval('[data-testid="total-looses"]', (th) => th.innerText);
    const goalsFavorTh = await page.$eval('[data-testid="goals-favor"]', (th) => th.innerText);
    const goalsOwnTh = await page.$eval('[data-testid="goals-own"]', (th) => th.innerText);
    const goalsBalanceTh = await page.$eval('[data-testid="goals-balance"]', (th) => th.innerText);
    const efficiencyTh = await page.$eval('[data-testid="efficiency"]', (th) => th.innerText);

    expect(classificationTh).toEqual(scoreBoardTableHeaderMock[0]);
    expect(totalPointsTh).toEqual(scoreBoardTableHeaderMock[1]);
    expect(totalGamesTh).toEqual(scoreBoardTableHeaderMock[2]);
    expect(totalVictoriesTh).toEqual(scoreBoardTableHeaderMock[3]);
    expect(totalDrawsTh).toEqual(scoreBoardTableHeaderMock[4]);
    expect(totalLoosesTh).toEqual(scoreBoardTableHeaderMock[5]);
    expect(goalsFavorTh).toEqual(scoreBoardTableHeaderMock[6]);
    expect(goalsOwnTh).toEqual(scoreBoardTableHeaderMock[7]);
    expect(goalsBalanceTh).toEqual(scoreBoardTableHeaderMock[8]);
    expect(efficiencyTh).toEqual(scoreBoardTableHeaderMock[9]);
  });

  it('Verifica que a tabela está renderizando os 16 times do campeonato', async () => {
    await page.goto(`${BASE_URL}/leaderboard`);
    await page.waitForSelector('[data-testid="leaderboardTable-body"]');

    const scoreBoardTableHeaderMock = [
      { firstPosition: ['1 Palmeiras', '16', '6', '5', '1', '0', '19', '6', '13', '88.90'] },
      { secondPosition: ['2 Corinthians', '13', '6', '4', '1', '1', '14', '5', '9', '72.22'] },
      { thirdPosition: ['3 Santos', '11', '5', '3', '2', '0', '12', '6', '6', '73.33'] },
      { fourthPosition: ['4 Internacional', '10', '5', '3', '1', '1', '7', '6', '2', '66.67'] },
      { fifthPosition: ['5 Real Brasília', '10', '5', '3', '1', '1', '5', '4', '1', '66.67'] },
      { sixthPosition: ['6 Grêmio', '10', '5', '3', '1', '1', '9', '8', '1', '66.67'] },
      { seventhPosition: ['7 São Paulo', '9', '6', '2', '3', '1', '18', '15', '3', '50'] },
      { eighthPosition: ['8 Ferroviária', '7', '5', '2', '1', '2', '7', '7', '0', '46.67'] },
      { ninthPosition: ['9 São José-SP', '6', '5', '2', '0', '3', '5', '6', '-1', '40'] },
      { tenthPosition: ['10 Flamengo', '5', '5', '1', '2', '2', '2', '5', '-3', '33.33'] },
      { eleventhPosition: ['11 Cruzeiro', '5', '6', '1', '2', '3', '17', '19', '-2', '27.78'] },
      { twelfthPosition: ['12 Botafogo', '4', '5', '1', '1', '3', '3', '8', '-5', '26.67'] },
      { thirteenthPosition: ['13 Avaí/Kindermann', '4', '5', '1', '1', '3', '4', '8', '-4', '26.67'] },
      { fourteenthPosition: ['14 Bahia', '3', '7', '0', '4', '4', '5', '10', '-5', '14.29'] },
      { fifteenthPosition: ['15 Minas Brasília', '2', '5', '0', '2', '3', '4', '9', '-5', '13.33'] },
      { sixteenthPosition: ['16 Napoli-SC', '2', '5', '0', '2', '3', '3', '12', '-9', '13.33'] },
    ]

    // for (const club of scoreBoardTableHeaderMock) {
    //   console.log(club)
    // }
    // const firstPosition = await page.$$eval('[data-testid="1-leaderbord-position"] td', (ths) => ths.map((th) => th.innerText));

    // console.log(firstPosition);
  });
});
