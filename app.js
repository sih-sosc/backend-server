const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const loginRouter = require('./routes/login');
const registerRouter = require('./routes/register');
const logRouter = require('./routes/view_logs');
const dashboardRouter = require('./routes/dashboard');
const serviceRouter = require('./routes/services');
const contactRouter = require('./routes/contacts');
const addContactRouter = require('./routes/add_contact');
const trackRouter = require('./routes/track');

const app = express();

require('./config/database');

// view engine setup
app.set('views', path.join(__dirname, 'views'));


app.options('*', cors()) // include before other routes 
app.use(cors())


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/view_logs', logRouter);
app.use('/dashboard', dashboardRouter);
app.use('/services', serviceRouter);
app.use('/contacts', contactRouter);
app.use('/add_contact', addContactRouter);
app.use('/track', trackRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error');
});

module.exports = app;
