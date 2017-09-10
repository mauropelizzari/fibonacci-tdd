'use strict';

module.exports =function(app) {
  var fibonacciController = require('../controllers/fibonacciController');

  // Routes
 app.route('/fibonacci/:number')
   .get(fibonacciController.fibonacci);


}
