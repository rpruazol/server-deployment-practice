'use strict';

// index.js is only starting the server

const {app, start} = require('./src/server');

require('dotenv').config();

const PORT = process.env.PORT;

start(PORT);
