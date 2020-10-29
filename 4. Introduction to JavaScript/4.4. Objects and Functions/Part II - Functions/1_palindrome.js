function palindrome(string) {

  //Creates a reverted version of parameter string
  let stringReverse = "";

  for (i = (string.length - 1); i >= 0; i -= 1) {
    stringReverse = stringReverse + string[i];
  }

  //Checks if reverted string is the same as parameter
  if (string == stringReverse) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome("arara"));
