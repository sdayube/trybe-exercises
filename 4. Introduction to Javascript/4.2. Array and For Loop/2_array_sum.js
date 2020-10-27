let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;

let numberSum = 0;

for (let i = 0; i < numbers.length; i += 1) {
  numberSum += numbers[i];
}

console.log(numberSum);
