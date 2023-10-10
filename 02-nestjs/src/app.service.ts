import { Injectable } from '@nestjs/common';

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
