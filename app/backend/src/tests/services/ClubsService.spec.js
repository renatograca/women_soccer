// const { stub } = require('sinon');
// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const {
//   describe, beforeEach, it, afterEach,
// } = require('mocha');

// const { expect } = chai;

// const { default: ClubsService } = require('../../../build/services/ClubsService');
// const { default: Clubs } = require('../../../build/database/models/ClubsModel');

// chai.use(chaiHttp);

// describe('Valida o ClubsService', () => {
//   const findAllClubs = stub(Clubs, 'findAll');
//   const findOneClub = stub(Clubs, 'findOne');

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
//     findAllClubs.returns(clubs);
//     findOneClub.resolves();
//   });

//   afterEach(() => {
//     findAllClubs.restore();
//     findOneClub.restore();
//   });

//   it('chamando o ClubsService.getAllClubs', async () => {
//     const response = await ClubsService.getAllClubs();
//     expect(response).to.be.eq(clubs);
//   });
//   it('chamando o ClubsService.getOneClub', async () => {
//     const { dataValues } = await ClubsService.getOneClub(1);
//     expect(dataValues).to.be.have.a.property('clubName');
//   });
//   it('chamando o ClubsService.getOneClub passando um valor invalido', async () => {
//     const response = await ClubsService.getOneClub(80);
//     expect(response).to.be.null;
//   });
// });
