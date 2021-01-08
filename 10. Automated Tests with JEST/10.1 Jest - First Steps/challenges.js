// Desafio 1
function compareTrue(a, b) {
  return a && b;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(arr) {
  return `${arr[arr.length - 1]}, ${arr[0]}`;
}

// Desafio 5
function footBallPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(arr) {
  return arr.sort((a, b) => b - a).filter((...[element, , array]) => element === array[0]).length;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) === Math.abs(mouse - cat2)) return 'os gatos trombam e o rato foge';
  return (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) ? 'cat1' : 'cat2';
}

// Desafio 8
function fizzBuzz(arr) {
  return arr.map((element) => {
    if (element % 15 === 0) return 'fizzBuzz';
    if (element % 3 === 0) return 'fizz';
    if (element % 5 === 0) return 'buzz';
    return 'bug!';
  });
}

// Desafio 9
function scrambler(str, original, cipher) {
  original.forEach((element, i) => {
    str = str.replace(new RegExp(`${element}`, 'g'), cipher[i]);
  });
  return str;
}

function encode(str) {
  return scrambler(str, ['a', 'e', 'i', 'o', 'u'], ['1', '2', '3', '4', '5']);
}

function decode(str) {
  return scrambler(str, ['1', '2', '3', '4', '5'], ['a', 'e', 'i', 'o', 'u']);
}

// Desafio 10
function techList(arr, name) {
  return arr.length > 0
    ? arr.sort().map(element => Object.fromEntries([['tech', element], ['name', name]]))
    : 'Vazio!';
}

// Desafio 11
function generatePhoneNumber(arr) {
  if (arr.length !== 11) return 'Array com tamanho incorreto';
  if (arr.some(element => typeof element !== 'number')) return 'O array deve conter apenas números';

  const repeatMap = (arr.reduce((acc, val) => acc.set(val, (acc.get(val) || 0) + 1), new Map()));

  if (arr.join('').length !== 11 || [...(repeatMap.values())].some(rep => rep >= 3)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  arr.splice(0, 0, '(');
  arr.splice(3, 0, ') ');
  arr.splice(9, 0, '-');

  return arr.join('');
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  return [lineA, lineB, lineC]
    .filter((...[line, , arr]) => line < arr.reduce((acc, val) => acc + val) - line).length === 3;
}

// Desafio 13
function hydrate(str) {
  const waterCounter = str.match(/\d+/g).reduce((a, b) => parseInt(a, 10) + parseInt(b, 10));
  return waterCounter === '1' ? '1 copo de água' : `${waterCounter} copos de água`;
}

module.exports = {
  compareTrue,
  calcArea,
  splitSentence,
  concatName,
  footBallPoints,
  highestCount,
  catAndMouse,
  fizzBuzz,
  encode,
  decode,
  techList,
  generatePhoneNumber,
  triangleCheck,
  hydrate,
};
