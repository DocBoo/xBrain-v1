
// process.env variables
require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });

const request = require('supertest');

describe('Server', function() {
  it('should return Hello World!', function(done) {
    request(`${process.env.SERVER_URL}:${process.env.SERVER_PORT}`)
      .get('/test')
      .expect(200)
      .expect('Hello World!', done);
  });
});