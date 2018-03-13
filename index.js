var freegeoip = require('./freegeoip');
var input = require('./input');

var baseURL = 'https://freegeoip.net/'
var format = 'json/'
var website = 'github.com'

var combinedLink = input.GetLink();

freegeoip.GetIP(combinedLink);

freegeoip.GetAllData(combinedLink)