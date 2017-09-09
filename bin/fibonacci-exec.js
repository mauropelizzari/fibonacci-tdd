#!/usr/bin/env node

const readline = require('readline')
const lib= require('../index.js');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please insert the numbers of elements: ', (n) => {
  var fibonacci = lib.fibonacci(n);
  console.log(fibonacci);
  rl.close();
});
