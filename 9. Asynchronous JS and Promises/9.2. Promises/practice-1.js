const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random() * 11);

  if (number > 10 || number <= 5) {
    return reject(new Error(`Que fracasso =( Nosso número foi ${number}`));
  }
  return resolve(console.log(`Que sucesso =) nosso número foi ${number}`));
});

async function execute() {
  try {
    await promise;
  } catch (error) {
    console.log(error.message);
  }
}

execute();
