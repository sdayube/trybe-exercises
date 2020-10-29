function romanConvert(string) {

  let number = 0;

  for (i = string.length - 1; i >= 0; i -= 1) {
    if (string[i-1] + string[i] === "IV") {
      number = number + 4;
      i -= 1;
    } else if (string[i-1] + string[i] === "IX") {
      number = number + 9;
      i -= 1;
    } else if (string[i-1] + string[i] === "XL") {
      number = number + 40;
      i -= 1;
    } else if (string[i-1] + string[i] === "XC") {
      number = number + 90;
      i -= 1;
    } else if (string[i-1] + string[i] === "CD") {
      number = number + 400;
      i -= 1;
    } else if (string[i-1] + string[i] === "CM") {
      number = number + 900;
      i -= 1;
    } else if (string[i] === "I") {
      number = number + 1;
    } else if (string[i] === "V") {
      number = number + 5;
    } else if (string[i] === "X") {
      number = number + 10;
    } else if (string[i] === "L") {
      number = number + 50;
    } else if (string[i] === "C") {
      number = number + 100;
    } else if (string[i] === "D") {
      number = number + 500;
    } else if (string[i] === "M") {
      number = number + 1000;
    }
  }
  return number;
}

console.log(romanConvert("MMMDCCCLXXV"))
