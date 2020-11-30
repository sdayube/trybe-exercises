const assert = require('assert');

const greetPeople = (people) => {
  const result = [];
  people.forEach((element) => result.push(`Hello ${element}`));
  return result;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.deepStrictEqual(greetPeople(parameter), result);
