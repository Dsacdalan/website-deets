// Modules
const express = require('express');
const path = require('path');
const app = express();

var home = require('./routes/home');
var site = require('./routes/site');

// View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/', home);
app.use('/site', site);

// Error
app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = err;
  res.render('error');
});


app.listen(3000, () => {
  console.log('Listening on port 3000');
});