const { stub } = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
const {
  describe, beforeEach, it, afterEach,
} = require('mocha');

const { expect } = chai;

const { default: app } = require('../../build/app');
const { default: ClubsModel } = require('../../build/database/models/ClubsModel');

chai.use(chaiHttp);

describe('Valida o model Clubs', () => {
  const getAllClubs = stub(ClubsModel, 'findAll');

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

  beforeEach(async () => {
    getAllClubs.resolves(clubs);
  });

  afterEach(() => {
    getAllClubs.restore();
  });

  it('Valida requisições na tabela de clubs', async () => {
    await chai.request(app).get('/clubs');
    expect(ClubsModel.findAll.calledOnce).to.be.equals(true);
  });
});
