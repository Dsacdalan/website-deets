const NodeCache = require('node-cache');
const cache = new NodeCache();

exports.GetCache = (key, callback) => {
  cache.get(key, (err, value) => {
    if (err) {
      callback(value);
    }

  })
}

exports.SetCache = (key, value) => {
  cache.set(key, value, 600)
}