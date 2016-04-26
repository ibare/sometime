var request = require('supertest');

module.exports = {

  prepare(app, method, endpoint, status, contentsType) {
    return request(app)[method](endpoint)
      .expect(status || 200)
      .expect('content-type', contentsType || /application\/json/);
  }

};
