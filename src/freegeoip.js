const request = require('request');
const cacheService = require('./cacheService');
const formatService = require('./formatService');

const baseURL = 'https://freegeoip.net/';
const ttl = 600;

/**
 * Returns location information for a given website or IP from cache.
 * If item is not in cach, makes the HTTP request for data.
 * @param {string} site - The website or IP to search for.
 * @param {string} type - JSON, CSV, or XML.
 * @param {Function} callback - Callback after complete.
 */
exports.GetAllDataCache = (site, type, callback) => {
  var key = site + type;
  cacheService.instance().get(key, (err, value) => {
    // If the value is undefined, make the HTTP request for the data.
    if (value == undefined) {
      var fullURL = baseURL + type + '/' + site;
      
      request(fullURL, (err, res, body) => {
        if (res.statusCode === 200) {
          var data = JSON.parse(body);
          data = formatService.format(data);
          // Cache the data and return the data.
          cacheService.instance().set(key, data, ttl, (err, success) => {
            if (success) callback(data);
          });
        } else {
          callback(null);
        }
      });
      // Else return the cached value
    } else callback(value);
  });
}; 