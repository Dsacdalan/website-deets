var readline = require('readline');

var baseURL = 'https://freegeoip.net/'
var format = 'json/'
var website = 'github.com'

var userInput = readline.createInterface( {
  input: process.stdin,
  output: process.stdout
})


exports.GetLink = () => {
  var userWebsite = '';
  userInput.question("Please enter a website or IP to search."), (answer) => {
    userWebsite = answer;
  }
  userInput.close();

  return baseURL + format + userWebsite;
}