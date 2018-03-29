const NodeCache = require('node-cache');
const ttl = 600;
let cacheService = null;

/**
 * Starts the cache service.
 * @param {function} done 
 */
exports.start = (done) => {
  if (cacheService) return done();
  
  cacheService = new NodeCache();
};

/**
 * Gets the current isntance of the cache service.
 */
exports.instance = function() {
  return cacheService;
};

/**
 * 
 * @param {String} key 
 * @param {Function} done 
 */
exports.Get = (key, done) => {
  this.instance().get(key, (err, data) => {
    if(err) {
      done(err);
    } else {
      done(null, data);
    }
  });
};

/**
 * 
 * @param {String} key 
 * @param {Object} data 
 * @param {Function} done 
 */
exports.Set = (key, data, done) => {
  this.instance().set(key, data, ttl, (err, success) => {
    if (err) {
      done(err);
    } else {
      done(null, success);
    }
  });
};