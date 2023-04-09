import * as readline from 'readline';

// Gera um número aleatório entre 1 e 100
const randomNumber: number = Math.floor(Math.random() * 100) + 1;

// Cria uma interface para leitura da linha de comando
const rl: readline.Interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pede para o usuário adivinhar o número
rl.question('Tente adivinhar o número entre 1 e 100: ', (answer: string) => {
  // Converte a resposta do usuário para um número inteiro
  const guess: number = parseInt(answer);

  // Verifica se o palpite do usuário está correto
  if (guess === randomNumber) {
    console.log('Parabéns! Você acertou o número.');
  } else {
    console.log(`Infelizmente, você errou. O número era ${randomNumber}.`);
  }

  // Fecha a interface de leitura da linha de comando
  rl.close();
});
