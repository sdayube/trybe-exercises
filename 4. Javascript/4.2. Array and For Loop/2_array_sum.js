let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// -------------------
// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

console.log(numbers);


// -------------------
// Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;

let numberSum = 0;

for (let i = 0; i < numbers.length; i += 1) {
  numberSum += numbers[i];
}

console.log(numberSum);


// -------------------
// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

console.log(numberSum / numbers.length);


// -------------------
// Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

