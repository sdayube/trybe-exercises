// Crie uma função que receba três parâmetros, sendo eles:
// - Um objeto;
// - O nome de uma chave;
// - Seu valor.
// O retorno dessa função deve ser o objeto já com a nova chave adicionada nele.

function returnObject(obj, keyName, valueName) {
  const innerObj = obj;
  innerObj[keyName] = valueName;
  return innerObj;
}

const textObj = {
  name: 'Silvio',
  age: 26,
};

console.log(returnObject(textObj, 'profession', 'developer'));
