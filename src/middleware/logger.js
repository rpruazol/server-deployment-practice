'use strict';

const timeLogger = function(req, res, next) {
  req.timestamp = new Date();
  next();
};

module.exports = timeLogger;