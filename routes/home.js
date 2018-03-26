var express = require('express');
var router = express.Router();
var freegeoip = require('../service/freegeoip');
var cookieService = require('../service/cookieService');

router.get('/', (req, res) => {
  cookieService.GetHistory(req, (history) => {
    freegeoip.GetAllDataCache('', 'json', (data) => {
      res.render('home', { data: data, title: 'Home', history: history});
    });
  });
});

module.exports = router;