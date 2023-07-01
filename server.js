'use strict';

// server.js will have the routes, but the handler functions will live elsewhere
const express = require('express');

const greetingRoute = require('./controllers/greetingRoute');
const timeLogger = require('./controllers/middleware');
const testRoute = require('./controllers/testRoute');

const app = express();

app.use(timeLogger);

app.get('/', timeLogger, greetingRoute);
app.get('/test', testRoute);


module.exports = app;