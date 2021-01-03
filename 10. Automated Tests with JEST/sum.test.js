const sum = require('./sum');

describe('Tests sum function', () => {
  test('Sums passed values', () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
    expect(sum(-3, -3)).toBe(-6);
    expect(sum(0, 0)).toBe(0);
  });
  test('Throws error if parameters are not numbers', () => {
    expect(() => sum(4, '5')).toThrow('parameters must be numbers');
  });
});
