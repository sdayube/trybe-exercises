const getUserName = require('./getUserName');

describe('Tests getUserName with promise syntax', () => {
  test('getUserName with id 4 returns "Mark"', () => getUserName(4).then((name) => {
    expect(name).toBe('Mark');
  }));

  test('getUserName with id 3 throws an error', () => getUserName(3).catch((error) => {
    expect.assertions(1);
    expect(error.message).toMatch('User with id 3 not found.');
  }));
});
