var express = require('express');
var router = express.Router();

var freegeoip = require('../freegeoip');

router.get('/', (req, res) => {
  freegeoip.GetAllData("", "json", (data) => {
    res.render('home', { data: data});
  });
});

module.exports = router;