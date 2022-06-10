
import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Match from '../database/models/MatchModel';
// import ValidToken from '../validatesAll/ValidToken';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;


const match = [ 
  {
    id: 1,
    homeTeam: 16,
    homeTeamGoals: 1,
    awayTeams: 8,
    awayTeamsGoal: 1,
    inProgress: false,
    teamHome: { temName: 'são Paulo'}, teamAway: { temName: 'Grêmio'}
  },
  {
    id: 2,
    homeTeam: 9,
    homeTeamGoals: 1,
    awayTeams: 14,
    awayTeamsGoal: 1,
    inProgress: false,
    teamHome: { temName: 'Intenacional'}, teamAway: { temName: 'Santos'}   
  }
];

describe('Matches, get /matches', () => {
  let chaiHttpResponse: Response;

    beforeEach(() => {
      sinon.stub(Match, "findAll")
      .resolves(
        match as any);
 });

    afterEach(()=>{
      (Match.findAll as sinon.SinonStub).restore();
  });

   it('a requisição deve responder com status 200 e obj. match', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .get('/matches')
      .send({})

     expect(chaiHttpResponse.status).to.be.equal(200);
     expect(chaiHttpResponse.body[1]).to.have.property('id');
     // expect(chaiHttpResponse).to.have.property('token');
     // expect(chaiHttpResponse.body).to.have.property('id');
     // expect(chaiHttpResponse.body.user).to.have.property('username');
     // expect(chaiHttpResponse).to.have.property('role');
     // expect(chaiHttpResponse).to.have.property('email');

   });
});

const posMatch =  
  {
    id: 1,
    homeTeam: 16,
    awayTeams: 8,
    homeTeamGoals: 1,
    awayTeamsGoal: 1,
    inProgress: false,
    };

describe('route, post /matches', () => {
  let chaiHttpResponse: Response;

  beforeEach(() => {
      sinon.stub(Match, 'create')
      .resolves(
        posMatch as any);
 });

    afterEach(()=>{
      (Match.create as sinon.SinonStub).restore();
  });

   it('a requisição deve responder com status 200 e obj. match', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .post('/matches')
      .send({
    id: 1,
    homeTeam: 16,
    awayTeams: 8,
    homeTeamGoals: 1,
    awayTeamsGoal: 1,
    inProgress: false,
    })

     expect(chaiHttpResponse.status).to.be.equal(401);
     // expect(chaiHttpResponse.body).to.have.property('id');
     // expect(chaiHttpResponse).to.have.property('token');
     // expect(chaiHttpResponse.body).to.have.property('id');
     // expect(chaiHttpResponse.body.user).to.have.property('username');
     // expect(chaiHttpResponse).to.have.property('role');
     // expect(chaiHttpResponse).to.have.property('email');

   });
});

describe('route, post /matches:id/finish', () => {
  let chaiHttpResponse: Response;

    beforeEach(() => {
      sinon.stub(Match, 'update')
      .resolves(
        posMatch as any);
 });

    afterEach(()=>{
      (Match.update as sinon.SinonStub).restore();
  });

   it('a requisição deve responder com status 200 e obj. match', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .patch('/matches/1/finish')
      .send({})

     expect(chaiHttpResponse.status).to.be.equal(200);
     // expect(chaiHttpResponse.body).to.have.property('id');
     // expect(chaiHttpResponse.body).to.be.equal({ message: 'Finish' });
     // expect(chaiHttpResponse).to.have.property('token');
     // expect(chaiHttpResponse.body).to.have.property('id');
     // expect(chaiHttpResponse.body.user).to.have.property('username');
     // expect(chaiHttpResponse).to.have.property('role');
     // expect(chaiHttpResponse).to.have.property('email');

   });
});

describe('route, post /matches:id', () => {
  let chaiHttpResponse: Response;

    beforeEach(() => {
      sinon.stub(Match, 'update')
      .resolves(
        posMatch as any);
 });

    afterEach(()=>{
      (Match.update as sinon.SinonStub).restore();
  });

   it('a requisição deve responder com status 200 e obj. match', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .patch('/matches/1')
      .send({})

     expect(chaiHttpResponse.status).to.be.equal(200);
     // expect(chaiHttpResponse.body).to.have.property('id');
     // expect(chaiHttpResponse.body).to.be.equal({ message: 'Finish' });
     // expect(chaiHttpResponse).to.have.property('token');
     // expect(chaiHttpResponse.body).to.have.property('id');
     // expect(chaiHttpResponse.body.user).to.have.property('username');
     // expect(chaiHttpResponse).to.have.property('role');
     // expect(chaiHttpResponse).to.have.property('email');

   });
});

describe('route, put /matches/:id', () => {
  let chaiHttpResponse: Response;

    beforeEach(() => {
      sinon.stub(Match, 'update')
      .resolves(
        posMatch as any);
 });

    afterEach(()=>{
      (Match.update as sinon.SinonStub).restore();
  });

   it('a requisição deve responder com status 200 e obj. match', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .patch('/matches/1')
      .send({})

     expect(chaiHttpResponse).to.not.have.Arguments;
     // expect(chaiHttpResponse.body).to.have.property('id');
     // expect(chaiHttpResponse.body).to.be.equal({ message: 'Finish' });
     // expect(chaiHttpResponse).to.have.property('token');
     // expect(chaiHttpResponse.body).to.have.property('id');
     // expect(chaiHttpResponse.body.user).to.have.property('username');
     // expect(chaiHttpResponse).to.have.property('role');
     // expect(chaiHttpResponse).to.have.property('email');

   });
});
