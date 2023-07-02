'use strict';



function errorHandler404(req, res){
  res.status(404).send({
    error: 404,
    route: req.path,
    message: 'Not found'
  });
};


module.exports = errorHandler404;