// Modules
const path = require('path');
const express = require('express');
const cookies = require('cookies');
const favicon = require('serve-favicon');
const cacheService = require('./src/cacheService');

const port = process.env.PORT || 8080;

// Cache - Setup
cacheService.start(() => {
});

// Express - Setup
const app = express();
app.use(cookies.express());
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));
var home = require('./routes/home');
var search = require('./routes/search');var about = require('./routes/about');


// Express - View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Express - Router
app.use('/', home);
app.use('/search', search);
app.use('/about', about);

// Express - Error Handling 
app.use((req, res, next) => {
  var message = (req.errorMessage) ? req.errorMessage : 'that page';
  var err = new Error(message);
  err.status = 404;
  next(err);
});
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error', {title: 404, message: err.message});
});

// Express - Start
app.listen(port, () => {
  console.log('Listening on port ' + port + '.');
});