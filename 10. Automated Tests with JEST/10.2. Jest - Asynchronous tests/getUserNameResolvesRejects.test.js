const getUserName = require('./getUserName');

describe('Tests getUserName with .resolves/.rejects syntax', () => {
  test('getUserName with id 5 returns "Paul"',
    () => expect(getUserName(5)).resolves.toBe('Paul'));
  test('getUserName with id 8 throws an error',
    () => expect(getUserName(8)).rejects.toThrow('User with id 8 not found.'));
});
