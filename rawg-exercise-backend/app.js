var express = require('express');
var cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const videogamesRouter = require ('./routes/videogames');
const healthRouter = require ('./routes/health')
const { errorLogger, errorResponder, invalidPathHandler } = require('./src/middlewares/error')

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'bin')));


app.use('/videogames', videogamesRouter);
app.use('/health', healthRouter);
app.use(errorLogger);
app.use(errorResponder);
app.use(invalidPathHandler);

module.exports = app;
