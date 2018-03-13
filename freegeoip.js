var request = require('request');

exports.GetIP = (link) => {
  request(link, (error, response, body) => {
    var data = JSON.parse(body);
    console.log(data.ip);
  });
};

exports.GetAllData = (link) => {
  request(link, (err, res, body) => {
    var data = JSON.parse(body);
    console.log(body);
  });
};