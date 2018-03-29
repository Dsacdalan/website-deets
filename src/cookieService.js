const cookieName = 'history';
const maxHistory = 5;

/**
 * Get the user's history from cookies.
 * @param {Request} req - The Express request object.
 * @param {Function} callback - Callback function.
 */
exports.GetHistory = (req, callback) => {
  var history = req.cookies.get(cookieName);

  if (!history) {
    history = [];
    req.cookies.set(cookieName, JSON.stringify(history));
    callback(history);
  } else callback(JSON.parse(history));
};

/**
 * Set's a website into the user's history cookie.
 * @param {Request} req - The Express request object.
 */
// TODO: handle user's own IP
exports.SetHistory = (req) => {
  var history;
  var cookie = req.cookies.get(cookieName);

  if (cookie === undefined) {
    history = new Array();
  } else {
    history = JSON.parse(cookie);

    // Look for previous entry
    var found = history.findIndex((element) => {
      return element === req.query.q;
    });

    // If a previous entry, delete it
    if(found !== -1) {
      history.splice(found, 1);
    }
  
    // Trim history
    if (history.length >= maxHistory) {
      history = history.slice(0, maxHistory - 1);
    }
  }
  
  history.splice(0, 0, req.query.q);
  req.cookies.set(cookieName, JSON.stringify(history));
};