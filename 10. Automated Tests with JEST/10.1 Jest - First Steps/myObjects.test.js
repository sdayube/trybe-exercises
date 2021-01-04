const { obj1, obj2, obj3 } = require('./myObjects.js');

describe('Tests equality and inequality of objects', () => {
  test('checks if two objects are deep equals', () => {
    expect(obj1).toEqual(obj2);
  });
  test('checks if two objects are not deep equals', () => {
    expect(obj1).not.toEqual(obj3);
  });
});
