// // const { stub, resetHistory } = require('sinon');
// const chai = require('chai');
// const chaiHttp = require('chai-http');
// // const proxyquire = require('proxyquire');
// // const { makeMockModels } = require('sequelize-test-helpers');
// const {
//   describe, beforeEach, it, afterEach,
// } = require('mocha');

// const { expect } = chai;

// const { default: app } = require('../../build/app');

// // const { default: MatchesModel } = require('../../build/database/models/MatchesModel');

// chai.use(chaiHttp);

// describe('GET /result', () => {
//   // const resultsMatches = stub(MatchesModel, 'findAll');
//   // const matchesResult = [{
//   //   name: 'Palmeiras',
//   //   totalPoints: 13,
//   //   totalGames: 5,
//   //   totalVictories: 4,
//   //   totalDraws: 1,
//   //   totalLooses: 0,
//   //   goalsFavor: 17,
//   //   goalsOwn: 5,
//   //   goalsBalance: 12,
//   //   efficiency: 86.67,
//   // },
//   // {
//   //   name: 'Corinthians',
//   //   totalPoints: 12,
//   //   totalGames: 5,
//   //   totalVictories: 4,
//   //   totalDraws: 0,
//   //   totalLooses: 1,
//   //   goalsFavor: 12,
//   //   goalsOwn: 3,
//   //   goalsBalance: 9,
//   //   efficiency: 80,
//   // }];
//   beforeEach(() => {
//     // resultsMatches.resolves(matchesResult);
//   });
//   afterEach();

//   it('GET /result', async () => {
//     const result = await chai.request(app).get('/result');
//     expect(result.status).to.be.equals(200);
//     console.log(result.status);
//     expect(result.body).to.be.a('array');
//   });
// });
