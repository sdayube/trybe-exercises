// Utilizando for, crie uma array que vá de 1 até 25 e imprima o resultado;

let counter = [];

for (let i = 1; i <= 25; i += 1) {
  counter.push(i);
}

for (let i = 0; i < counter.length; i += 1) {
  console.log(`${counter[i]} divided by 2 is ${counter[i] / 2}.`);
}
