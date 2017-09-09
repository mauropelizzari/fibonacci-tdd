var fibonacci = require("./app/fibonacci").fibonacci;

exports.fibonacci = (n) => {
  console.log("Serie di Fibonacci con " + n + " elementi");
  return fibonacci(n);
}
