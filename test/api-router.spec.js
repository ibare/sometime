var request = require('supertest');
var toys = require('./toytools');
var app = require('../lib/server/sometime');

describe('api-router', () => {

  describe('root', () => {

    it('response', done => {
      toys.prepare(app, 'get', '/api/v1')
        .end((err, res) => {
          if (err) throw err;
          done();
        });
    });

    describe('Browse document directories', () => {

      it('year directory', done => {
        toys.prepare(app, 'get', '/api/v1/2016')
          .end((err, res) => {
            if (err) throw err;

            done();
          });
      });

      it('month directory', done => {
        toys.prepare(app, 'get', '/api/v1/2016/04')
          .end((err, res) => {
            if (err) throw err;
            done();
          });
      });

      it('day directory', done => {
        toys.prepare(app, 'get', '/api/v1/2016/04/25')
          .end((err, res) => {
            if (err) throw err;
            done();
          });
      });

    });

  });
});
