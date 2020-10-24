let salarioBruto = 3500.00;

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

console.log("Salário bruto = " + (salarioBruto));
console.log("INSS = " + valorInss);
console.log("Salário base = " + (salarioBase));
console.log("IR = " + (valorImposto - abateImposto));
console.log("Salário líquido = " + (salarioBase - valorImposto + abateImposto));
