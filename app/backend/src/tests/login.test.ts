import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import User from '../database/models/UserModel';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

/*
const userLogin = {
  id: 1,
  username: 'admin',
  role: 'admin',
  email: 'admin',
  password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW',  
};
*/


describe('Login', () => {
  let chaiHttpResponse: Response;

    beforeEach(async () => {
      sinon.stub(User, "findOne")
      .resolves(
        { id: 1,
          username: 'admin',
          role: 'admin',
          email: 'admin',
          password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW' } as User);
 });

    afterEach(()=> {
      (User.findOne as sinon.SinonStub).restore();
  })

   it('a requisição deve responder com status 200', async () => {
     chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({ email: 'admin@admin.com', password: 'secret_admin' })
       console.log(chaiHttpResponse.body, 'chai');

     expect(chaiHttpResponse.status).to.be.equal(200);
     expect(chaiHttpResponse.body).to.have.property('user');
     // expect(chaiHttpResponse).to.have.property('token');
     // expect(chaiHttpResponse.body).to.have.property('id');
     expect(chaiHttpResponse.body.user).to.have.property('username');
     expect(chaiHttpResponse.body).to.have.property('role');
     expect(chaiHttpResponse.body).to.have.property('email');

   });
    it('se a requisição não receber email, deve responder com status 400', async () => {
     chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({ password: 'secret_admin' })

     expect(chaiHttpResponse.status).to.be.equal(400);
     // expect(chaiHttpResponse.body).to.be.(message);
     // expect(chaiHttpResponse).to.have.property('token');
     // expect(chaiHttpResponse.body).to.have.property('id');
     // expect(chaiHttpResponse.body.user).to.have.property('username');
     // expect(chaiHttpResponse).to.have.property('role');
     // expect(chaiHttpResponse).to.have.property('email');

   });
    it('se a requisição não receber password, deve responder com status 400', async () => {
     chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({ email: 'admin@admin.com' })

     expect(chaiHttpResponse.status).to.be.equal(400);
     
    });
     it('se a requisição não receber um email, ou passwor validos retornar com status 400', async () => {
     chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({ email: 'admin-Aroba-admin-Ponto-com', password: 'senha invalida' })

     expect(chaiHttpResponse.status).to.be.equal(401);
     
    });

});
