'use strict';



function errorHandler500(req, res){
  res.status(500).send({
    error: 500,
    route: req.path,
    message: 'Something went wrong.'
  });
};


module.exports = errorHandler500;