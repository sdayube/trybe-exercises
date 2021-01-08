const myFizzBuzz = require('./myFizzBuzz');

describe('Tests myFizzBuzz function', () => {
  test('Returns \'fizzbuzz\' if number is divisible by both 3 and 5', () => {
    expect(myFizzBuzz(15)).toBe(('fizzbuzz'));
    expect(myFizzBuzz(30)).toBe(('fizzbuzz'));
  });
  test('Returns \'fizz\' if number is divisible by 3 and not by 5', () => {
    expect(myFizzBuzz(3)).toBe(('fizz'));
    expect(myFizzBuzz(33)).toBe(('fizz'));
  });
  test('Returns \'buzz\' if number is divisible by 5 and not by 3', () => {
    expect(myFizzBuzz(5)).toBe(('buzz'));
    expect(myFizzBuzz(20)).toBe(('buzz'));
  });
  test('Returns number if it is not divisible by either 5 or 3', () => {
    expect(myFizzBuzz(4)).toBe((4));
    expect(myFizzBuzz(23)).toBe((23));
  });
});
