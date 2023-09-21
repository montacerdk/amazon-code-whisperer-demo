import * as fs from "fs";

// function that three numbers and return the largest number
export function largestNumber(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num;
  }
}

// function that returns factorial of a number
export function factorial(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result = result * i;
  }
}

// function that resolve the fizzbuzz problem
export function fizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz";
  }
}

// function that read a file and print it
export function readFile(fileName) {
  fs.readFile(fileName, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    }
  });
}

// check if number is prime
export function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// check if a number is palindrome
export function isPalindrome(num) {
  let reverse = 0;
  let temp = num;

  while (temp > 0) {
    let lastDigit = temp % 10;
    reverse = reverse * 10 + lastDigit;
    temp = Math.floor(temp / 10);
  }
  if (num === reverse) {
    return true;
  }
  return false;
}

// check if an object is not empty
export function isEmpty(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}

// check if a number is odd
export function isOdd(num) {
  if (num % 2 === 0) {
    return false;
  }
  return true;
}

// Unit tests.

// unit test for isEmpty
export function testIsEmpty() {
  const obj = {
    a: 1,
  };
  const obj2 = {};
  const result = isEmpty(obj);
  const result2 = isEmpty(obj2);
  expect(result).toBe(false);
  expect(result2).toBe(true);
}

// unit test for isPalindrome
export function testIsPalindrome() {
  const num = 12321;
  const num2 = 123;
  const result = isPalindrome(num);
  const result2 = isPalindrome(num2);
  expect(result).toBe(true);
  expect(result2).toBe(false);
}
