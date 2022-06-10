import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Team from '../database/models/TeamModel';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;


const teams = [
        { 
          id: 1,  
          teamName: 'Avaí/Kindermann',
        },
        {
          id: 2,   
          teamName: 'Bahia',
        },
        {
          id: 3,    
          teamName: 'Botafogo',
        },
        {
          id: 4, 
          teamName: 'Corinthians',
        },
        {
          id: 5,   
          teamName: 'Cruzeiro',
        },
        {
          id: 6,   
          teamName: 'Ferroviária',
        },
        {
          id: 7,   
          teamName: 'Flamengo',
        },
        {
          id: 8,   
          teamName: 'Grêmio',
        },
    ];

describe('rota get /team', () => {
  let chaiHttpResponse: Response;

    beforeEach(() => {
      return sinon.stub(Team, 'findAll')
      .resolves(
        teams as any);
 })

    afterEach(()=> {
      (Team.findAll as sinon.SinonStub).restore();
  })
  
   it('a requisição deve responder com status 200 e um array de teams', 
     async () => {
     chaiHttpResponse = await chai
      .request(app)
      .get('/teams')
      .send({})

     expect(chaiHttpResponse.status).to.be.equal(200);
     // expect(chaiHttpResponse.body).to.have.property(teams);
     // expect(chaiHttpResponse).to.have.deep.equal(teams);  
     // expect(chaiHttpResponse.body).to.have.property('id');
     // expect(chaiHttpResponse.body.user).to.have.property('teamName');
   }); 
});

const team = { id: 8, teamName: 'Gremio' };

describe('route get /teams/:id', () => {
  
    let chaiHttpResponse: Response;

  beforeEach(() => {
    return sinon.stub(Team, 'findOne')
    .resolves(
    team as any);
 });
 
    afterEach(()=> {
    (Team.findOne as sinon.SinonStub).restore();
  });

  it(' a requisição deve responder com status 200 e objeto team de acordo com ID solicitado', 
  async () => {
    chaiHttpResponse = await chai.request(app)
    .get('/teams/8').send({});
    expect(chaiHttpResponse).to.be.status(200);
    // expect(chaiHttpResponse).to.have.property(team);  
  });
});        
