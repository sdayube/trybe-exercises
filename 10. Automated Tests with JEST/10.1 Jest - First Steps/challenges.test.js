const {
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
} = require('./challenges');

describe('Tests refactored answers to the challenges from the Playground Functions project', () => {
  test('Tests challenge 1 - using the && operator', () => {
    expect(compareTrue(true, true)).toBe(true);
    expect(compareTrue(false, true)).toBe(false);
    expect(compareTrue(true, false)).toBe(false);
    expect(compareTrue(false, false)).toBe(false);
  });

  test('Tests challenge 2 - triangle area', () => {
    expect(calcArea(2, 2)).toBe(2);
    expect(calcArea(13, 20)).toBe(130);
    expect(calcArea(367, 270)).toBe(49545);
  });

  test('Tests challenge 3 - string splitting', () => {
    expect(splitSentence('go Trybe')).toEqual(['go', 'Trybe']);
    expect(splitSentence('I am mighty!')).toEqual(['I', 'am', 'mighty!']);
    expect(splitSentence('noSplit')).toEqual(['noSplit']);
  });

  test('Tests challenge 4 - concat name', () => {
    expect(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'])).toBe('Paolillo, Lucas');
    expect(concatName(['Not', 'a', 'name.'])).toBe('name., Not');
    expect(concatName(['Only one item.'])).toBe('Only one item., Only one item.');
  });

  test('Tests challenge 5 - football points', () => {
    expect(footBallPoints(3, 1)).toBe(10);
    expect(footBallPoints(13, 8)).toBe(47);
    expect(footBallPoints(100, 100)).toBe(400);
  });

  test('Tests challenge 6 - highest count', () => {
    expect(highestCount([1, 1, 9, 4, 6, 10, 15, 13, 15, 15])).toBe(3);
    expect(highestCount([10, 9, 9, 4, 6, 9, 10])).toBe(2);
    expect(highestCount([9, 1, 9, 9, 4, 6, 9, 1, 9])).toBe(5);
  });

  test('Tests challenge 7 - cat and mouse', () => {
    expect(catAndMouse(8, 10, 6)).toBe('os gatos trombam e o rato foge');
    expect(catAndMouse(8, 11, 6)).toBe('cat2');
    expect(catAndMouse(8, 11, 4)).toBe('cat1');
  });

  test('Tests challenge 8 - fizzBuzz', () => {
    expect(fizzBuzz([8, 10, 6, 15])).toEqual(['bug!', 'buzz', 'fizz', 'fizzBuzz']);
    expect(fizzBuzz([60, 65, 66, 67, 75])).toEqual(['fizzBuzz', 'buzz', 'fizz', 'bug!', 'fizzBuzz']);
  });

  test('Tests challenge 9 - encode/decode', () => {
    expect(encode('Hello, my name is Silvio.')).toBe('H2ll4, my n1m2 3s S3lv34.');
    expect(decode('H2ll4, my n1m2 3s S3lv34.')).toBe('Hello, my name is Silvio.');
    expect(encode('Welcome to the jungle, we got fun and games')).toBe('W2lc4m2 t4 th2 j5ngl2, w2 g4t f5n 1nd g1m2s');
    expect(decode('W2lc4m2 t4 th2 j5ngl2, w2 g4t f5n 1nd g1m2s')).toBe('Welcome to the jungle, we got fun and games');
  });

  test('Tests challenge 10 - tech list', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([{ tech: 'CSS', name: 'Lucas' }, { tech: 'HTML', name: 'Lucas' }, { tech: 'JavaScript', name: 'Lucas' }, { tech: 'Jest', name: 'Lucas' }, { tech: 'React', name: 'Lucas' }]);
    expect(techList(['Angular', 'Vue', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Silvio')).toEqual([{ tech: 'Angular', name: 'Silvio' }, { tech: 'CSS', name: 'Silvio' }, { tech: 'HTML', name: 'Silvio' }, { tech: 'JavaScript', name: 'Silvio' }, { tech: 'Jest', name: 'Silvio' }, { tech: 'Vue', name: 'Silvio' }]);
  });

  test('Tests challenge 11 - generate phone number', () => {
    expect(generatePhoneNumber([1, 1, 9, 6, 4, 5, 0, 7, 7, 0, 4, 9]))
      .toBe('Array com tamanho incorreto');
    expect(generatePhoneNumber([1, 1, 9, 6, 4, 5, 0, 7, 7, 9]))
      .toBe('Array com tamanho incorreto');
    expect(generatePhoneNumber([1, 1, 9, 6, 4, 5, 0, 7, 7, 9, 'a']))
      .toBe('O array deve conter apenas números');
    expect(generatePhoneNumber([[1], 1, 9, 6, 4, 5, 0, 7, 7, 9, 3]))
      .toBe('O array deve conter apenas números');
    expect(generatePhoneNumber([7, 1, 9, 9, 4, 0, 4, 7, 1, 3, 9]))
      .toBe('não é possível gerar um número de telefone com esses valores');
    expect(generatePhoneNumber([1, 1, 9, 6, 4, 5, 0, 7, 7, 0, -4]))
      .toBe('não é possível gerar um número de telefone com esses valores');
    expect(generatePhoneNumber([1, 1, 9, 6, 4, 5, 10, 7, 7, 0, 4]))
      .toBe('não é possível gerar um número de telefone com esses valores');
    expect(generatePhoneNumber([1, 1, 9, 6, 4, 5, 0, 7, 7, 0, 4]))
      .toBe('(11) 96450-7704');
    expect(generatePhoneNumber([1, 5, 3, 4, 6, 1, 0, 3, 7, 0, 9]))
      .toBe('(15) 34610-3709');
  });

  test('Tests challenge 12 - triangle checker', () => {
    expect(triangleCheck(10, 14, 8)).toBe(true);
    expect(triangleCheck(32, 21, 25)).toBe(true);
    expect(triangleCheck(15, 5, 9)).toBe(false);
    expect(triangleCheck(21, 11, 8)).toBe(false);
    expect(triangleCheck(12, 54, 77)).toBe(false);
  });

  test('Tests challenge 13 - hydrate', () => {
    expect(hydrate('4 cachaças, 15 cervejas e 3 copos de vinho')).toBe('22 copos de água');
    expect(hydrate('0 bebidas alcoólicas')).toBe('0 copos de água');
    expect(hydrate('2 caipiroskas, 1 shot de tequila e 5 skol beats')).toBe('8 copos de água');
    expect(hydrate('1 cervejinha')).toBe('1 copo de água');
  });
});
