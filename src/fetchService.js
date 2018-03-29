const cacheService = require('./cacheService');
var freegeoip = require('./freegeoip');
var cookieService = require('../src/cookieService');

/**
 * 
 * @param {Request} req 
 * @param {Function} done
 */
exports.Search = (req, done) => {
  cacheService.Get(req.query.q, (err, data) => {
    if(err) {
      done(err);
    } else if (!data) {
      // If the data is not in cache, call API
      freegeoip.GetData(req.query.q, (err, data) => {
        if (err) {
          done(err);
        } else {
          // Add to cookies
          if (req.query.q) cookieService.SetHistory(req);
          // Cache data
          // TODO: Log this error
          cacheService.Set(req.query.q, data, () => {});
          done(null, data);
        }
      });
    } else {
      done(null, data);
    }
  });
};