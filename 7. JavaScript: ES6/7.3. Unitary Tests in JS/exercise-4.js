const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui
assert(myFizzBuzz(15) === 'fizzbuzz');
assert(myFizzBuzz(6) === 'fizz');
assert(myFizzBuzz(10) === 'buzz');
assert(myFizzBuzz(3) === 'fizz');
assert(myFizzBuzz(2) === 2);
assert(!myFizzBuzz('a'));
