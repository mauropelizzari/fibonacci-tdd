'use strict';

const fbn = require('../model/fibonacci');

exports.fibonacci = function(req, res) {

  let seq = fbn.fibonacci(req.params.number);

  res.json(seq);

}
