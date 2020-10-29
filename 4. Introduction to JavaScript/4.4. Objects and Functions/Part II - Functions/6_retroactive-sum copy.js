function retroSum(n) {
  let sum = 0;
  for (let i = n; i > 0; i -= 1){
    sum = sum + i;
  }
  return sum;
}

console.log(retroSum(5));