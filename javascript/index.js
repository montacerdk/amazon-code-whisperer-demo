import * as fs from "fs";

// function that returns factorial of a number
export function factorial(number) {
  if (number === 0) {
    return 1;
    // if number is negative return -1
  }

  if (number < 0) {
    return -1;
  }

  let result = 1;
  for (let i = 1; i <= number; i++) {
    result = result * i;
  }
}

export function readFile(filePath) {
  const file = fs.readFileSync(filePath, "utf8");
  return file;
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

// Unit tests.

// unit test for factorial
export function testFactorial() {
  const num = 5;
  const num2 = -5;
  const num3 = 0;
  const result = factorial(num);
  const result2 = factorial(num2);
  const result3 = factorial(num3);
  expect(result).toBe(120);
  expect(result2).toBe(-1);
  expect(result3).toBe(1);
}

// unit test for isPalindrome
export function testIsPalindrome() {
  const num = 121;
  const num2 = 123;
  const result = isPalindrome(num);
  const result2 = isPalindrome(num2);
  expect(result).toBe(true);
  expect(result2).toBe(false);
}

// test isEmpty function
export function testIsEmpty() {
  const obj = { name: "John" };
  const obj2 = {};
  const result = isEmpty(obj);
  const result2 = isEmpty(obj2);
  expect(result).toBe(false);
  expect(result2).toBe(true);
}
