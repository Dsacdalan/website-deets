var express = require('express');
var router = express.Router();

var fetchService = require('../src/fetchService');

router.get('/', (req, res, next) => {
  fetchService.Search(req, (err, data) => {
    if (err) {
      req.errorMessage = req.query.q;
      next();
    } else {
      res.render('search', { 
        name: req.query.q ? req.query.q : 'Your Computer',
        title: 'Search',
        data: data
      });
    }
  });
});

module.exports = router;