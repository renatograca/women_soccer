const { resetHistory } = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
const {
  describe, it, afterEach, after, before,
} = require('mocha');

const { expect } = chai;

const { default: app } = require('../../build/app');

chai.use(chaiHttp);

describe('Requisição a rota de clubs', () => {
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

  afterEach(resetHistory);

  after(resetHistory);
  it('POST /validate', async () => {
    const { token } = user.body;
    const result = await chai.request(app).get('/validate')
      .set({ Authorization: `${token}` });
    expect(result).to.have.status(200);
  });
  it('POST /auth --- Retonar erro quando usuario nao existe', async () => {
    const result = await chai.request(app).post('/auth')
      .send(
        {
          email: 'mequiUser@email.com',
          password: 'minhas_senha_muito_boa',
        },
      );

    expect(result.status).to.be.equals(401);
    expect(result.body).to.be.equals('User does not exists!');
  });
  it('POST /auth --- Retonar erro quando usuario nao existe', async () => {
    const result = await chai.request(app).post('/auth')
      .send(
        {
          email: 'renato@email.com',
          password: '123456',
        },
      );

    expect(result.status).to.be.equals(401);
    expect(result.body).to.be.equals('Invalid password!');
  });
});
