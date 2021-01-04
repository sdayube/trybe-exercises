const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Crie uma função para adicionar o turno da manhã na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

function addAtr(obj, key, value) {
  const innerObj = obj;
  innerObj[key] = value;
  return innerObj;
}

console.log(addAtr(lesson2, 'turno', 'manhã'));

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

function listKeys(obj) {
  const keys = Object.keys(obj);
  return keys;
}

console.log(listKeys(lesson1));

// Crie uma função para mostrar o tamanho de um objeto.

function objSize(obj) {
  return listKeys(obj).length;
}

console.log(objSize(lesson3));

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

function objValues(obj) {
  const values = Object.values(obj);
  return values;
}

console.log(objValues(lesson3));

// Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:

const allLessons = {
  lesson1: {},
  lesson2: {},
  lesson3: {},
};

Object.assign(allLessons.lesson1, lesson1);
Object.assign(allLessons.lesson2, lesson2);
Object.assign(allLessons.lesson3, lesson3);

console.log(allLessons);

// Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

function allStudents(obj) {
  const allEntries = Object.entries(obj);
  let studentCount = 0;

  allEntries.forEach((element) => (studentCount += element[1].numeroEstudantes));

  return studentCount;
}

console.log(allStudents(allLessons));

// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:

function getValueByNumber(obj, position) {
  return Object.values(obj)[position];
}

console.log(getValueByNumber(lesson1, 0));

// Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:

function verifyPair(obj, key, value) {
  const allPairs = Object.entries(obj);
  console.log(allPairs);
  return allPairs.some((element) => element[0] === key && element[1] === value);
}

console.log(verifyPair(lesson3, 'turno', 'noite'));
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));

// Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.

function mathStudents(obj) {
  const allEntries = Object.entries(obj);
  let studentCount = 0;

  allEntries.forEach((element) => {
    if (element[1].materia === 'Matemática') {
      studentCount += element[1].numeroEstudantes;
    }
  });

  return studentCount;
}

console.log(mathStudents(allLessons));

// Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:

function teacherReport(obj, teacher) {
  const allEntries = Object.entries(obj);
  const classList = [];
  let studentCount = 0;

  allEntries.forEach((element) => {
    if (element[1].professor === teacher) {
      classList.push(element[1].materia);
      studentCount += element[1].numeroEstudantes;
    }
  });

  return {
    professor: teacher,
    aulas: classList,
    estudantes: studentCount,
  };
}

console.log(teacherReport(allLessons, 'Maria Clara'));
