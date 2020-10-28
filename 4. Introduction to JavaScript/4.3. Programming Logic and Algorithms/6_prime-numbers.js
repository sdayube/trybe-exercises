let n = 7;

let factors = [];

for (let i = 1; i <= n; i += 1) {
  if (n % i == 0) {
    factors.push(i);
  }
}

if (factors.length == 2) {
console.log(`${n} is prime.`);
} else {
  console.log(`${n} is not prime.`);
}