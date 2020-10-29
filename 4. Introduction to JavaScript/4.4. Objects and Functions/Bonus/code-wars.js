function add(num1, num2) {
  let string1 = Math.max(num1, num2).toString();
  let string2 = Math.min(num1, num2).toString();
  let newString = "";
    
  for (let i = 1; i <= string1.length; i++) {
    let element1 = parseInt(string1[string1.length - i]);
    let element2;
    if (string2.length - i >= 0) {
      element2 = parseInt(string2[string2.length - i]);
    } else {
      element2 = 0;
    }
    let counter = element1 + element2;
    newString = counter.toString() + newString;
  }

  return newString;
}

console.log(add(1575,22588));
