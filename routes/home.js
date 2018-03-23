var express = require('express');
var router = express.Router();

var freegeoip = require('../freegeoip');

router.get('/', (req, res) => {
  freegeoip.GetAllDataCache("", "json", (data) => {
    res.render('home', { data: data, title: 'Home'});
  });
});

module.exports = router;