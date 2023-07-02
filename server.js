'use strict';

// server.js will have the routes, but the handler functions will live elsewhere
const express = require('express');

const greetingRoute = require('./controllers/greetingRoute');
const timeLogger = require('./controllers/middleware');
const testRoute = require('./controllers/testRoute');
const errorHandler404 = require('./controllers/errorHandler404');

const app = express();

app.use(timeLogger);

app.get('/', timeLogger, greetingRoute);
app.get('/test', testRoute);
app.use(errorHandler404);




module.exports = app;