'use strict';

// index.js is only starting the server
const {app, start} = require('./src/server');
const { dbInstance } = require('./src/models/index');

require('dotenv').config();

const PORT = process.env.PORT;

// connect to our database

dbInstance
  .sync()
  .then((res) => {
    console.log('started', res.models)
    start(PORT);
  })
  .catch(console.error);
