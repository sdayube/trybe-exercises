const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
assert(sum(4, 5) === 9, 'A soma de 4 com 5 é 9');
assert(sum(0, 0) === 0, 'A soma de 0 com 0 é 0');
assert.throws(() => sum(4, '5'), 'A função não lançou erro');
assert.throws(() => sum(4, '5'), /parameters must be numbers/, 'Mensagem de erro errada');
