const request = require('request');
const formatService = require('./formatService');

const baseURL = 'https://freegeoip.net/json/';

/**
 * 
 * @param {String} query - User query.
 * @param {Function} done - Callback function.
 */
exports.GetData = (query, done) => {
  var fullURL = baseURL  + query;
  request(fullURL, (err, res, body) => {
    if(err) {
      done(err);
    } else if (res.statusCode === 404) {
      err = new Error('404');
      done(err);
    } else {
      var data = JSON.parse(body);
      data = formatService.format(data);
      done(null, data);
    }
  });
};