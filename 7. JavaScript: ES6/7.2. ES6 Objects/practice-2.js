const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

// Tente criar uma função que exiba as habilidades do objeto student

function skills(obj) {
  const keyArray = Object.keys(obj);
  let skillString = '';
  for (let index = 0; index < keyArray.length; index += 1) {
    skillString += `${keyArray[index]}, Nível ${obj[keyArray[index]]}\n`;
  }
  return skillString;
}

console.log(skills(student1), skills(student2));
