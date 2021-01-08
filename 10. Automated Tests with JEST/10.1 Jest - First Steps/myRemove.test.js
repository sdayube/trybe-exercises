const myRemove = require('./myRemove');

describe('Tests myRemove function', () => {
  const paramArr = [1, 2, 3, 4];
  test('Returns array copy without instances of given element, if any', () => {
    expect(myRemove(paramArr, 3)).toEqual([1, 2, 4]);
    expect(myRemove(paramArr, 3)).not.toEqual([1, 2, 3, 4]);
    expect(myRemove(paramArr, 5)).toEqual([1, 2, 3, 4]);
  });
  test('Does not modify parameter array', () => {
    expect(paramArr).toEqual([1, 2, 3, 4]);
  });
});
