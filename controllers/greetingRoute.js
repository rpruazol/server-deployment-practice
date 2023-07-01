'use strict';


function greetingRoute(req, res) {
  res.send({text:'hello world!', timestamp: req.timestamp});
}

module.exports = greetingRoute;