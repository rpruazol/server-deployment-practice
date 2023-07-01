'use strict';


function greetingRoute(req, res) {
  console.log(req.timestamp);
  res.send('hello world!');
}

module.exports = greetingRoute;