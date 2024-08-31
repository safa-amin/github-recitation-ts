// Endpoint for querying the fibonacci numbers

const fibonacci = require("./fib");

export default (req, res) => {
  const { num } = req.params as { num: string }; // Explicitly typing `num` as a string

  const fibN = fibonacci(parseInt(num));
  let result = `fibonacci(${num}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
};
