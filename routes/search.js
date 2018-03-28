var express = require('express');
var router = express.Router();

var freegeoip = require('../src/freegeoip');
var cookieSerivce = require('../src/cookieService');

router.get('/', (req, res, next) => {
  var site, name = '';

  if (req.query.q !== '') {
    site = req.query.q;
    name = req.query.q;
    
  } else {
    site = '';
    name = 'Your Computer';
  }

  freegeoip.GetAllDataCache(site, 'json', (data) => {
    if (data) {
      if (req.query.q != '') {
        cookieSerivce.SetHistory(req);      
      }

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