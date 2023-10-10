import { fizzBuzz } from './app.service';

describe('AppService', () => {
  describe('fizzBuzz', () => {
    it('should return "Fizz" when number is divisible by 3', () => {
      expect(fizzBuzz(3)).toBe('Fizz');
    });

    it('should return "Buzz" when number is divisible by 5', () => {
      expect(fizzBuzz(5)).toBe('Buzz');
    });

    it('should return "FizzBuzz" when number is divisible by 3 and 5', () => {
      expect(fizzBuzz(15)).toBe('FizzBuzz');
    });
  });
});
