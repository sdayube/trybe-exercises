const getUserName = require('./getUserName');

describe('Tests getUserName with promise syntax', () => {
  test('getUserName with id 5 returns "Paul"', async () => {
    const name = await getUserName(5);
    expect(name).toBe('Paul');
  });

  test('getUserName with id 7 throws an error', async () => {
    expect.assertions(1);
    try {
      await getUserName(7);
    } catch (error) {
      expect(error.message).toMatch('User with id 7 not found.');
    }
  });
});
