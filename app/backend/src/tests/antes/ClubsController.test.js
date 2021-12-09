// const { stub } = require('sinon');
// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const {
//   describe, beforeEach, it, afterEach,
// } = require('mocha');

// const { expect } = chai;

// // const { default: app } = require('../../../build/app');
// const { default: ClubsService } = require('../../../build/services/ClubsService');
// const { default: ClubsController } = require('../../../build/controllers/ClubsController');

// chai.use(chaiHttp);

// describe('Valida o ClubsController', () => {
//   const getAllClubs = stub(ClubsService, 'getAllClubs');
//   const getOneClub = stub(ClubsService, 'getOneClub');

//   const request = {};
//   const response = {};

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
//     request.body = {};
//     getAllClubs.resolves(clubs);
//     getOneClub.resolves();
//     response.status = stub().returns(response);
//     response.json = stub().returns(response);
//   });

//   afterEach(() => {
//     getAllClubs.restore();
//     getOneClub.restore();
//   });

//   it('chamando o ClubsController.getAllClubs', async () => {
//     await ClubsController.getAllClubs(request, response);
//     expect(response.status.calledWith(200)).to.be.eq(true);
//     expect(response.json.calledWith(clubs)).to.be.eq(true);
//   });
//   it('chamando o ClubsController.getOneClub', async () => {
//     request.params = { id: 1 };
//     await ClubsController.getOneClub(request, response);
//     expect(response.status.calledWith(200)).to.be.eq(true);
//   });
// });
