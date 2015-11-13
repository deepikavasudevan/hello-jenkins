var request = require('supertest');
var app = require('../hello-world-app.js');

describe('GET Request', function() {
  it('Respond with you are at home page', function() {
    request(app).get('/').expect('You are at the home page');
  });

  it('Respond with hello world for hello URL', function() {
    request(app).get('/hello').expect('Hello world');
  });
});
