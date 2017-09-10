#!/usr/bin/env node

'use strict';

console.log("Fibonacci Sequence!!!");

const readline = require('readline')
const lib= require('../app/model/fibonacci');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please insert the numbers of elements (): ', (n) => {
  var fibonacci = lib.fibonacci(n);
  console.log(fibonacci);
  rl.close();
});
