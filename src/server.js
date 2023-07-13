'use strict';

// server.js will have the routes, but the handler functions will live elsewhere
const express = require('express');

const greetingRoute = require('./routes/greetingRoute');
const timeLogger = require('./middleware/logger');
const testRoute = require('./routes/testRoute');
const errorHandler404 = require('./error-handlers/404');
const errorHandler500 = require('./error-handlers/500');
const personRoute = require('./routes/personRoute');
const validator = require('./middleware/validator');
const carRoutes = require('./routes/carRoutes');
const vehicleRoutes = require('./routes/vehicleRoutes');

const app = express();

app.use(express.json());

app.use(timeLogger);

app.get('/', timeLogger, greetingRoute);
app.get('/person',validator, personRoute);
app.get('/test', testRoute);

app.use(carRoutes);
app.use(vehicleRoutes);


app.use('*', errorHandler404);
app.use(errorHandler500);


function start(PORT){
  app.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}`);
  });
}

module.exports = {app, start};