function factorial(n: number): number {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Digite um número para calcular o fatorial: ', (num: string) => {
  const n = parseInt(num);
  if (isNaN(n) || n < 0) {
    console.log('Por favor, digite um número positivo.');
  } else {
    const result = factorial(n);
    console.log(`O fatorial de ${n} é ${result}.`);
  }
  rl.close();
});
