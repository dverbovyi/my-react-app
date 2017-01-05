process.env.NODE_ENV = 'test';

const request = require('supertest'),
    app = require('./app');

describe('#API TESTS', () => {
  describe('Session', () => {
    it('should answer on GET', done => {
      request(app)
        .post('/api/token')
        .expect(200, {
          "token": "dsfsdfevdsv1231233wefsdfc3244"
        }, done)
    })
  });
  describe('404', () => {
    it('should return status 404 if resource not found', done => {
      request(app)
        .get('/blabla')
        .expect(404, {}, done);
    })
  })
})
