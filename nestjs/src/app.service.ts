import { Injectable } from '@nestjs/common';

export const standardDeviation = (values: number[]) => {
  const avg = values.reduce((a, b) => a + b, 0) / values.length;
  const squareDiffs = values.map((value) => {
    const diff = value - avg;
    const sqrDiff = diff * diff;
    return sqrDiff;
  });

  const avgSquareDiff =
    squareDiffs.reduce((a, b) => a + b, 0) / squareDiffs.length;
  return Math.sqrt(avgSquareDiff);
};

export const fizzBuzz = (numm: number) => {
  if (numm % 15 === 0) {
    return 'FizzBuzz';
  } else if (numm % 3 === 0) {
    return 'Fizz';
  } else if (numm % 5 === 0) {
    return 'Buzz';
  } else {
    return String(numm);
  }
};

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getFizzBuzz: (num: number) => string = fizzBuzz;
}
