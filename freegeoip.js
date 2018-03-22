var request = require('request');

var baseURL = 'https://freegeoip.net/';
var format = 'json/';
var website = 'github.com';

exports.GetAllDataCache = (site, type, callback) => {
  
  var fullURL = baseURL + type + "/" + site;
  
  request(fullURL, (err, res, body) => {
    var data = JSON.parse(body);
    callback(data);
  });
}; 


exports.GetAllData = (site, type, callback) => {
  
  var fullURL = baseURL + type + "/" + site;
  
  request(fullURL, (err, res, body) => {
    var data = JSON.parse(body);
    callback(data);
  });
}; 