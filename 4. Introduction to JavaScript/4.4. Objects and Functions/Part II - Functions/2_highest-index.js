let testArray = [2, 3, 6, 7, 10, 1];

function highestIndex(array) {
  
  let highestIndex = 0;
  let highestNum = array[0];

  for (let i = 1; i < array.length; i += 1) {
    if (array[i] > highestNum) {
      highestNum = array[i];
      highestIndex = i;
    }
  }

  return highestIndex;
}

console.log(highestIndex(testArray));
