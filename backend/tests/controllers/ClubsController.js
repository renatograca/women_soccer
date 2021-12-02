const sinon = require('sinon');
const { expect } = require('chai');
const { describe, beforeEach, it } = require('mocha');

describe('Verifica a rota de Clubs', () => {
  const request = { body: '' };
  const response = {};
  const clubs = [
    {
      club_name: 'Avaí/Kindermann',
    },
    {
      club_name: 'Bahia',
    },
    {
      club_name: 'Botafogo',
    },
    {
      club_name: 'Corinthians',
    },
  ];

  beforeEach(() => {
    request.body = clubs;
    response.status = sinon.stub().returns(response);
    response.status = sinon.stub().returns();
  });

  it('Deve retornar todos os clubs', async () => {
    expect(response.status.calledWith(201)).to.be.equal(true);
  });
});
