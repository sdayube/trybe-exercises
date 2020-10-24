let custo = 100;
let venda = 140;
let custoTotal = (custo * 1.2);

if (custo < 0 || venda < 0) {
  console.log("Erro: os valores não podem ser negativos");
} else {
  console.log(venda - custoTotal);
}
