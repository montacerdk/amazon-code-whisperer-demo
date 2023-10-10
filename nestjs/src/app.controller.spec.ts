import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { fizzBuzz } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });

  describe('fizzBuzz', () => {
    it('should return "FizzBuzz"', () => {
      expect(fizzBuzz(15)).toBe('FizzBuzz');
    });

    it('should return "Fizz"', () => {
      expect(fizzBuzz(3)).toBe('Fizz');
    });

    it('should return "Buzz"', () => {
      expect(fizzBuzz(5)).toBe('Buzz');
    });

    it('should return the number', () => {
      expect(fizzBuzz(1)).toBe('1');
    });

    it('should return the number', () => {
      expect(fizzBuzz(2)).toBe('2');
    });

    it('should return the number', () => {
      expect(fizzBuzz(4)).toBe('4');
    });

    it('should return the number', () => {
      expect(fizzBuzz(6)).toBe('6');
    });
  });
});
