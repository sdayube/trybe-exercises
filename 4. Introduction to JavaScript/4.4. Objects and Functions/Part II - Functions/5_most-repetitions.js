let testArray = [2, 3, 2, 5, 8, 2, 3];

function mostRepeated(array) {

  //declares mostRepeatedNumber to store solution, highestRepCount to store highest repetition count, and repCount to count repetitions inside second loop;
  let mostRepeatedNumber = array[0];
  let highestRepCount = 0;
  let repCount = 0;

  //This loop iterates once for every array element;
  for (let i = 0; i < array.length; i += 1) {

    //First we save the elementValue;
    let elementValue = array[i];

    //Then we count reps of elementValue in the array;
    for (let i2 = 0; i2 < array.length; i2 += 1) {
      if (array[i2] == elementValue) {
        repCount += 1;
      }
    }

    //If repCount is higher than highestRepCount, updates it and changes mostRepeatedNumber to current elementValue
    if (repCount > highestRepCount) {
      highestRepCount = repCount;
      mostRepeatedNumber = elementValue;
    }

    //Resets repCount
    repCount = 0;
  }
  
  return mostRepeatedNumber;
}

console.log(mostRepeated(testArray));