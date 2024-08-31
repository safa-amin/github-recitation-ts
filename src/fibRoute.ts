import { Request, Response } from 'express';
import fibonacci from './fib';

// Endpoint for querying the fibonacci numbers
export default (req: Request, res: Response) => {
  const { num } = req.params as { num: string };

  const parsedNum: number = parseInt(num, 10);
  const fibN: number = fibonacci(parsedNum);
  let result = `fibonacci(${num}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
};