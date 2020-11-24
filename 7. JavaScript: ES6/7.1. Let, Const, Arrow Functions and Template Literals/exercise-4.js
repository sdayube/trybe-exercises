// Crie uma função que receba uma frase e retorne qual a maior palavra.

const longestWord = (str) => str.split(' ').sort((a, b) => (b.length - a.length))[0];

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));
