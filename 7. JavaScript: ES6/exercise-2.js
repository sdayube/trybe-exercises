//  faça uma função que retorne o array oddsAndEvens em ordem crescente.

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const crescentSort = (array) => array.sort((a, b) => a - b);

console.log(oddsAndEvens);
console.log(`Os números ${crescentSort(oddsAndEvens)} se encontram ordenados de forma crescente!`);
