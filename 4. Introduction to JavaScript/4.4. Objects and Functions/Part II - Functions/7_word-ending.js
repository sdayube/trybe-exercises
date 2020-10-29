let testString = "trybe";
let testEnd = "rybe";

function nameEnd(name, end) {

  for (let i = 1; i <= end.length; i += 1) {
    if (name[name.length - i] != end[end.length - i]) {
      return false;
    }
  }

  return true;
}

console.log(nameEnd(testString,testEnd));