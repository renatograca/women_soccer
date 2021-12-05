// const { stub } = require('sinon');
// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const {
//   describe, beforeEach, it, afterEach,
// } = require('mocha');

// const { expect } = chai;

// const { default: app } = require('../../build/app');
// const { default: ClubsService } = require('../../build/services/ClubsService');

// chai.use(chaiHttp);

// describe('Valida o model Clubs', () => {
//   const getAllClubs = stub(ClubsService, 'getAllClubs');

//   const clubs = [
//     {
//       id: 1,
//       clubName: 'Avaí/Kindermann',
//     },
//     {
//       id: 2,
//       clubName: 'Bahia',
//     },
//     {
//       id: 3,
//       clubName: 'Botafogo',
//     },
//     {
//       id: 4,
//       clubName: 'Corinthians',
//     },
//     {
//       id: 5,
//       clubName: 'Cruzeiro',
//     },
//   ];

//   beforeEach(async () => {
//     getAllClubs.resolves(clubs);
//   });

//   afterEach(() => {
//     getAllClubs.restore();
//   });

//   it('chamando o ClubsService.getAllClubs', async () => {
//     const result = await chai.request(app).get('/clubs');

//     expect(ClubsService.getAllClubs.calledOnce).to.be.equals(true);
//     expect(result.status).to.be.equals(200);
//     expect(result.body).to.be.an('array');
//   });
//   it('chamando o ClubsService.getOneClub', async () => {
//     const result = await chai.request(app).get('/clubs/1');

//     expect(ClubsService.getOneClub.calledOnce).to.be.equals(true);
//     expect(result.status).to.be.equals(200);
//     expect(result.body).to.be.have.a.property('clubName');
//     expect(result.body).to.be(clubs[0]);
//   });
// });
