const NodeCache = require('node-cache');
let cacheService = null;

exports.start = (done) => {
  if (cacheService) return done();
  
  cacheService = new NodeCache();
}

exports.instance = function() {
  return cacheService;
}