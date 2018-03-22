var express = require('express');
var router = express.Router();

var freegeoip = require('../freegeoip');

router.get('/', (req, res) => {
  var site, name = "";

  if (req.query.q) {
    site = req.query.q;
    name = req.query.q;
  } else {
    site = "";
    name = "Your Computer";
  }

  var type = (req.query.type === "json" || "csv" || "xml") ? req.query.type : "json";

  freegeoip.GetAllData(site, "json", (data) => {
    res.render('site', { 
      name: name,
      data: data
    });
  });
});

module.exports = router;