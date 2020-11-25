const assert = require('assert');

const removeVowels = (word) => {
  let results = '';
  let charCount = 0;

  for (let i = 0; i < word.length; i += 1) {
    if (
      word[i] === 'a'
      || word[i] === 'o'
      || word[i] === 'i'
      || word[i] === 'e'
      || word[i] === 'u'
    ) {
      charCount += 1;
      results += (charCount);
    } else {
      results += (word[i]);
    }
  }
  return results;
};

const parameter = 'Dayane';
const result = 'D1y2n3';

assert.strictEqual(removeVowels(parameter), result);
