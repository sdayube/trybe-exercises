let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let lowestNumber = numbers[0];

for (let i = 1; i < numbers.length; i += 1) {
  if (lowestNumber > numbers[i]) {
    lowestNumber = numbers[i]
  }
}

console.log(lowestNumber);
