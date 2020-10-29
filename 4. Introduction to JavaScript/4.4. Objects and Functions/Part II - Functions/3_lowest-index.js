let testArray = [2, 4, 6, 7, 10, 0, -3];

function lowestIndex(array) {
  
  let lowestIndex = 0;
  let lowestNum = array[0];

  for (let i = 1; i < array.length; i += 1) {
    if (array[i] < lowestNum) {
      lowestNum = array[i];
      lowestIndex = i;
    }
  }

  return lowestIndex;
}

console.log(lowestIndex(testArray));
