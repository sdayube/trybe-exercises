let testArray = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function mostCharacters(array) {

  let mostCharIndex = 0;
  let mostChars = array[0].length;

  for (let i = 1; i < array.length; i += 1) {
    if (array[i].length > mostChars) {
      mostChars = array[i].length;
      mostCharIndex = i;
    }
  }

  return array[mostCharIndex];
}

console.log(mostCharacters(testArray));
