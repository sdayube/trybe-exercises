const assert = require('assert');
// escreva a função wordLengths aqui

function wordLengths(array) {
  const countArray = [];
  array.forEach((element) => countArray.push(element.length));
  return countArray;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);
