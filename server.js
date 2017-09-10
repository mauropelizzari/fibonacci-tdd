const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

const routes = require('./app/routes/fibonacciRoutes'); //importing route
routes(app); //register the route

//start the server
app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
