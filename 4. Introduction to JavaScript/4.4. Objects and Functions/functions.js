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

//Função 7 - Conversor de notas de 0 a 100 para A a F
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

//Função 8 - Dentre três números, algum é par?
function evenChecker(a, b, c) {
  if (a % 2 == 0 || b % 2 == 0 || c % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

//Função 9 - Dentre três números, algum é ímpar?
function unevenChecker(a, b, c) {
  if (a % 2 != 0 || b % 2 != 0 || c % 2 != 0) {
    return true;
  } else {
    return false;
  }
}

//Função 10 - Lucro/prejuízo da venda de 1000 produtos
function profit(cost, sell) {
  let totalCost = (cost * 1.2);
  if (cost < 0 || sell < 0) {
    return "Erro: os valores não podem ser negativos";
  } else {
    return (sell - totalCost) * 1000;
  }
}

//Função 11 - Cálculo de salário líquido
function salarioLiquido(salarioBruto) {
  let valorInss, salarioBase, valorImposto, abateImposto;

  if (salarioBruto <= 1556.94) {
    valorInss = salarioBruto * 0.08;
  } else if (salarioBruto <= 2594.92) {
    valorInss = salarioBruto * 0.09;
  } else if (salarioBruto <= 5189.82) {
    valorInss = salarioBruto * 0.11;
  } else {
    valorInss = 570.88;
  }

  salarioBase = (salarioBruto - valorInss);

  if (salarioBase <= 1903.98) {
    valorImposto = 0;
    abateImposto = 0;
  } else if (salarioBase <= 2826.65) {
    valorImposto = salarioBase * 0.075;
    abateImposto = 142.80;
  } else if (salarioBase <= 3751.05) {
    valorImposto = salarioBase * 0.15;
    abateImposto = 354.80;
  } else if (salarioBase <= 4664,68) {
    valorImposto = salarioBase * 0.225;
    abateImposto = 636.13;
  } else {
    valorImposto = salarioBase * 0.275;
    abateImposto = 869.36;
  }

  return `  Salário bruto = ${salarioBruto};
  INSS = ${valorInss};
  Salário base = ${salarioBase};
  IR = ${valorImposto - abateImposto};
  Salário líquido = ${salarioBase - valorImposto + abateImposto}.`;
}


console.log(salarioLiquido(3000));