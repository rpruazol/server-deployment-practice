'use strict'

const errorHandler500 = require('../error-handlers/500');

const validator = function(req, res, next) {
  (!req.query.name) ? errorHandler500() : next();
};

module.exports = validator;