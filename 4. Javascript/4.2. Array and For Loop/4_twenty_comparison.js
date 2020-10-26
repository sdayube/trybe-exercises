let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let numberSum = 0;

for (let i = 0; i < numbers.length; i += 1) {
  numberSum += numbers[i];
}

if ((numberSum / numbers.length) > 20) {
 console.log("valor maior que 20"); 
} else {
  console.log("valor menor ou igual a 20"); 
}
