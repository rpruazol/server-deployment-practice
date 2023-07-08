'use strict';

// index.js is only starting the server
const {app, start} = require('./src/server');
const { dbInstance } = require('./src/models/index');

require('dotenv').config();

const PORT = process.env.PORT;

// connect to our database

dbInstance
  .sync()
  .then(() => {
    start(PORT);
  })
  .catch(console.error);
