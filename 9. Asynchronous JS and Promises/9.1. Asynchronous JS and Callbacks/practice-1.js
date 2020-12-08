const assert = require('assert');

const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const getUser = (callback) => {
  const userToReturn = {
    firstName: 'Ivan',
    lastName: 'Ivanovich',
    nationality: 'Russian',
  };
  return callback(userToReturn);
};

// complete as chamadas da função de getUser
assert.strictEqual(getUser(userFullName), 'Hello! My name is Ivan Ivanovich');
assert.strictEqual(getUser(userNationality), 'Ivan is Russian');
