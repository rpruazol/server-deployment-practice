'use strict';

function errorHandler500(err, req, res, next){
  res.status(500).send({
    status: 500,
    route: req.path,
    message: err.message ? err.message : err
  });
};


module.exports = errorHandler500;