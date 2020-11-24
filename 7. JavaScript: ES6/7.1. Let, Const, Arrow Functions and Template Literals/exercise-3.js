// Crie uma função que receba um número e retorne seu fatorial.
// Tente fazer o exercício de forma recursiva. Spoiler: É possível resolver com uma linha.

const factorial = (num) => (!num ? 1 : num * factorial(num - 1));

console.log(factorial(20));
