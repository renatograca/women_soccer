const { stub } = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
const {
  describe, beforeEach, it, afterEach, before,
} = require('mocha');

const { expect } = chai;

const { default: app } = require('../../build/app');
const { default: ClubsModel } = require('../../build/database/models/ClubsModel');

chai.use(chaiHttp);

describe('Requisição a rota de clubs', () => {
  const getAllClubs = stub(ClubsModel, 'findAll');
  const getOneClubs = stub(ClubsModel, 'findOne');

  const clubs = [
    {
      id: 1,
      clubName: 'Avaí/Kindermann',
    },
    {
      id: 2,
      clubName: 'Bahia',
    },
    {
      id: 3,
      clubName: 'Botafogo',
    },
    {
      id: 4,
      clubName: 'Corinthians',
    },
    {
      id: 5,
      clubName: 'Cruzeiro',
    },
  ];

  // let response = {};
  before(async () => {
    // response = await chai.request(app)
    //   .get('/clubs').send(clubs);
  });
  beforeEach(async () => {
    getAllClubs.resolves(clubs);
    getOneClubs.resolves(clubs[0]);
  });

  afterEach(() => {
    getAllClubs.restore();
  });

  it('GET /clubs', async () => {
    const result = await chai.request(app).get('/clubs');
    expect(result).to.have.status(200);
    expect(result.body).to.be.a('array');
  });
  it('GET /clubs/:id', async () => {
    const result = await chai.request(app).get('/clubs/1');

    expect(result.status).to.be.equals(200);
    expect(result.body).to.be.have.a.property('clubName');
  });
});
