//Função 1.1 - Adição
function adicao(a, b) {
  return a + b;
}

//Função 1.2 - Subtração
function subtracao(a, b) {
  return a - b;
}

//Função 1.3 - Divisão
function divisao(a, b) {
  return a / b;
}

//Função 1.4 - Divisão
function multiplicacao(a, b) {
  return a * b;
}

//Função 2 - Maior entre 2 números
function highestOfTwo(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

//Função 3 - Maior entre 3 números
function highestOfThree(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else
    return c;
}

//Função 4 - Maior entre 3 números
function zeroComparison(a) {
  if (a > 0) {
    return "positive";
  } else if (a < 0) {
    return "negative";
  } else {
    return "zero";
  }  
}

//Função 5 - Checagem de ângulos do triângulo
function triAngle(a, b, c) {
  if (a + b + c == 180) {
    return true;
  } else {
    return false;
  }  
}

//Função 6 - Se a peça for bispo, qual o movimento?
function chessBishop(a) {
  if (a.toLowerCase() == "bishop") {
    return "Diagonal";
  } else {
    return "Not the bishop!";
  }
}

//Função 7 - Se a peça for bispo, qual o movimento?
function gradeConvert(a) {
  if (a > 100 || a < 0) {
    return "erro - nota deve estar entre 100 e 0";
  } else if (a >= 90) {
    return "A";
  } else if (a >= 80) {
    return "B";
  } else if (a >= 70) {
    return "C";
  } else if (a >= 60) {
    return "D";
  } else if (a >= 50) {
    return "E";
  } else {
    return "F";
  }  
}


console.log(gradeConvert(23));