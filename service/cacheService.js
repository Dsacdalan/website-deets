const NodeCache = require('node-cache');
let cacheService = null;

/**
 * Starts the cache service.
 * @param {function} done 
 */
exports.start = (done) => {
  if (cacheService) return done();
  
  cacheService = new NodeCache();
}

/**
 * Gets the current isntance of the cache service.
 */
exports.instance = function() {
  return cacheService;
}