const assert = require('assert');
const request = require('request');
const cookieName = 'history';
var first = 'http://localhost:8080/search?q=google.com';
var second = 'http://localhost:8080/search?q=reddit.com';
var third = 'http://localhost:8080/search?q=twitter.com';
var fourth = 'http://localhost:8080/search?q=evga.com';
var fifth = 'http://localhost:8080/search?q=facebook.com';

describe('Serach for google.com', () => {
  it('should update the cookie', () => {
    request(first, (err, res, body) => {
      var cookie = JSON.parse(res.cookie.get(cookieName));
      assert.equal('google.com', cookie[0]);
    });
  });
});

describe('Visit 5 pages', () => {
  it('should update the cookie in order', () => {
    request(first, (err, res, body) => {
      request(second, (err, res, body) => {
        request(third, (err, res, body) => {
          request(fourth, (err, res, body) => {
            request(fifth, (err, res, body) => {
              var cookie = JSON.parse(res.cookie.get(cookieName));
              assert.equal('facebook.com', cookie[0]);
              assert.equal('evga.com', cookie[1]);
              assert.equal('twitter.com', cookie[2]);
              assert.equal('reddit.com', cookie[3]);
              assert.equal('google.com', cookie[4]);
            });
          });
        });
      });
    });
  });
});