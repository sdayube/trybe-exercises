// Escreva uma função que vai receber uma string como parâmetro.
// Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir
// pela string que você passou como parâmetro.
// Sua função deve retornar essa nova string.

// const nameReplaceX = (str) => {
//   const template = 'Tryber x aqui!';
//   return template.replace('x', str);
// };

const nameReplaceLiteral = (str) => `Tryber ${str} aqui!`;

// Um array com escopo global, que é o escopo do arquivo JS, nesse caso, contendo cinco strings com
// suas principais skills.

const skills = ['HTML', 'CSS', 'JavaScript', 'Aprender a aprender', 'Comunicação'];

// Escreva uma função que vai receber a string retornada da Função 1 como parâmetro.
// Essa função deve concatenar as skills do array global à string que foi passada para a Função 2
// via parâmetro.
//  Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string.

const nameAndSkills = (str) => `${str}
Minhas Minhas cinco principais habilidades são
 - ${skills.sort()[0]};
 - ${skills.sort()[1]};
 - ${skills.sort()[2]};
 - ${skills.sort()[3]};
 - ${skills.sort()[4]}.
#goTrybe`;

console.log(nameAndSkills(nameReplaceLiteral('Silvio')));
