const myRemoveWithoutCopy = require('./myRemoveWithoutCopy');

describe('Tests myRemoveWithoutCopy function', () => {
  test('Returns array without instances of given element, if any', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
  test('Modifies parameter array', () => {
    const paramArr = [1, 2, 3, 4];
    myRemoveWithoutCopy(paramArr, 3);
    expect(paramArr).toEqual([1, 2, 4]);
  });
});
