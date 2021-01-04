const uppercase = require('./uppercase');

test('Tests uppercase function', (done) => {
  uppercase('my name is Silvio', (result) => {
    expect(result).toBe('MY NAME IS SILVIO');
    done();
  });
});
