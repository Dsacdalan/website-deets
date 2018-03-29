var express = require('express');
var router = express.Router();
var cookieService = require('../src/cookieService');

router.get('/', (req, res) => {
  cookieService.GetHistory(req, (history) => {
    res.render('home', { title: 'Home', history: history});
  });
});

module.exports = router;