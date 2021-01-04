const assert = require('assert');
// escreva a função addAllnumbers aqui

function addAllnumbers(array) {
  let sum = 0;
  array.forEach((element) => (sum += element));
  return sum;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = addAllnumbers(numbers);

assert.strictEqual(typeof addAllnumbers, 'function');
assert.strictEqual(output, expected);
