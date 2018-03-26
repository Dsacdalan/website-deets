var express = require('express');
var router = express.Router();

var freegeoip = require('../freegeoip');
var cookieSerivce = require('../cookieService');

router.get('/', (req, res, next) => {
  var site, name = '';

  if (req.query.q) {
    site = req.query.q;
    name = req.query.q;
  } else {
    site = 'req.ip';
    name = 'Your Computer';
  }

  cookieSerivce.SetHistory(req);

  var type = (req.query.type === 'json' || 'csv' || 'xml') ? req.query.type : 'json';

  freegeoip.GetAllDataCache(site, 'json', (data) => {
      if (data) {
        res.render('search', { 
          name: name,
          title: 'Search',
          data: data
        });
      } else {
        req.errorMessage = site;
        next();
      }
  });
});

module.exports = router;