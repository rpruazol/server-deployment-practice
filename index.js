'use strict';

// index.js is only starting the server

const app = require('./server');

require('dotenv').config();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Now listening on port ${PORT}`);
});