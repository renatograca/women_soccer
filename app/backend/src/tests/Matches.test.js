const { stub, resetHistory } = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
// const proxyquire = require('proxyquire');
// const { makeMockModels } = require('sequelize-test-helpers');
const {
  describe, beforeEach, it, afterEach, before, after,
} = require('mocha');

const { expect } = chai;

const { default: app } = require('../../build/app');

const { default: MatchesModel } = require('../../build/database/models/MatchesModel');

chai.use(chaiHttp);

describe('Requisições a rota de matches', () => {
  // const Matches = { create: stub() };
  // const mockModels = makeMockModels({ Matches });
  // const { default: MatchesModel } = proxyquire
  // ('../../build/database/models/MatchesModel', { '../models': mockModels });

  const getAllMatches = stub(MatchesModel, 'findAll');
  const getOneMatch = stub(MatchesModel, 'findOne');
  const createMatch = stub(MatchesModel, 'create');
  // const updateMatch = stub(MatchesModel, 'update');
  const matches = [
    {
      id: 1,
      homeTeam: 16,
      homeTeamGoals: 1,
      awayTeam: 8,
      awayTeamGoals: 1,
      inProgress: false,
      homeClub: {
        clubName: 'São Paulo',
      },
      awayClub: {
        clubName: 'Grêmio',
      },
    },
    {
      id: 2,
      homeTeam: 9,
      homeTeamGoals: 1,
      awayTeam: 14,
      awayTeamGoals: 1,
      inProgress: false,
      homeClub: {
        clubName: 'Internacional',
      },
      awayClub: {
        clubName: 'Santos',
      },
    },
  ];

  let user = {};
  before(async () => {
    user = await chai.request(app)
      .post('/auth').send(
        {
          email: 'renato@email.com',
          password: 'minhas_senha_muito_boa',
        },
      );
  });
  // let response;
  beforeEach(async () => {
    getAllMatches.resolves(matches);
    getOneMatch.resolves(matches[0]);
    // updateMatch.resolves();
    // Matches.create.resolves({
    //   id: 42,
    //   homeTeam: 3,
    //   homeTeamGoals: 2,
    //   awayTeam: 4,
    //   awayTeamGoals: 0,
    //   inProgress: false,
    // });
    createMatch.resolves({
      id: 42,
      homeTeam: 3,
      homeTeamGoals: 2,
      awayTeam: 4,
      awayTeamGoals: 0,
      inProgress: false,
    });
    // response = await MatchesModel({});
  });

  // afterEach(resetHistory);
  afterEach(() => {
    getAllMatches.restore();
    getOneMatch.restore();
    createMatch.restore();
    // updateMatch.restore();
  });
  // after(() => user.restore());
  after(resetHistory);

  it('GET /matches', async () => {
    const result = await chai.request(app).get('/matches');
    expect(result).to.have.status(200);
    expect(result.body).to.be.a('array');
  });
  it('GET /matches/:id', async () => {
    const result = await chai.request(app).get('/matches/1');
    expect(result.status).to.be.equals(200);
    expect(result.body).to.be.a('object');
  });
  it('POST /matches -- Adiciona uma nova partida com sucesso', async () => {
    const { token } = user.body;
    const result = await chai.request(app).post('/matches')
      .set({ Authorization: `${token}` })
      .send({
        homeTeam: 1,
        homeTeamGoals: 2,
        awayTeam: 3,
        awayTeamGoals: 0,
        inProgress: true,
      });
    expect(result.status).to.be.equals(201);
    expect(result.body).to.be.a('object');
  });

  it('POST /matches -- Retorna um erro por dados invalidos', async () => {
    const { token } = user.body;
    const result = await chai.request(app).post('/matches')
      .set({ Authorization: `${token}` })
      .send({
        homeTeam: '',
        homeTeamGoals: 2,
        awayTeam: 3,
        awayTeamGoals: 0,
        inProgress: false,
      });

    expect(result.status).to.be.equals(401);
    expect(result.body).to.be.equals('There is no team with such id!');
  });
  it('GET /result', async () => {
    const result = await chai.request(app).get('/result');
    expect(result.status).to.be.equals(200);
  });
  it('PATCH /matches/:id -- Atualiza a quantidade de goals de uma partida com sucesso', async () => {
    const result = await chai.request(app).get('/matches/42')
      .send({ homeTeamGoals: 3, awayTeamGoals: 3 });
    expect(result.status).to.be.equals(200);
  });
  // it(
  //   'PATCH /matches/:id --
  //  Retornar um error ao atualiza a quantidade de goals com quantidade invalida',
  //   async () => {
  //     const result = await chai.request(app).get('/matches/42')
  //       .send({ homeTeamGoals: -2, awayTeamGoals: -1 });
  //     expect(result.status).to.be.equals(401);
  //   },
  // );
  it('PATCH /matches/:id -- Finaliza uma partida em andamento', async () => {
    const result = await chai.request(app).get('/matches/42')
      .send({ inProgress: false, homeTeam: 1, awayTeam: 3 });
    expect(result.status).to.be.equals(200);
    expect(result.body).to.be.null;
  });
});
