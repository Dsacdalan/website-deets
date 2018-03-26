const assert = require('assert');
const request = require('request');
var url = 'http://localhost:8080/';

describe('Get Homepage', function() {
  it('should return status 200', function() {
    request(url, function(err, res, body) {
      
      assert.equal(res.statusCode, 200);
    });
  });
});

describe('Get Bad Page', function() {
  it('should return status 404', function() {
    request(url + 'bogus', function(err, res, body) {
      assert.equal(res.statusCode, 555);
    });
  });
});