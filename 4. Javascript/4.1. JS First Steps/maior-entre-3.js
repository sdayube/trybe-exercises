let a = 10;
let b = 11;
let c = 11;

if (a > b && a > c) {
  console.log(a)
} else if (b > a && b > c) {
  console.log(b)
} else if (c > a && c > b) {
  console.log(c)
} else {
  console.log("There isn't a single higher number");
}
