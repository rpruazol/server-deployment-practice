'use strict';


function personRoute(req, res){
  res.status(200).json({name: req.query.name});
} 

module.exports = personRoute;