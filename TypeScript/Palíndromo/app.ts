import * as readline from 'readline';

function verificarPalindromo(palavra: string): boolean {
  // Converte a palavra para minúsculas e remove espaços em branco
  palavra = palavra.toLowerCase().replace(/\s/g, "");

  // Inverte a palavra usando o método Array.reverse() e junta os caracteres novamente em uma string
  const palavraInvertida: string = palavra.split("").reverse().join("");

  // Compara a palavra original com a palavra invertida e retorna true se forem iguais
  return palavra === palavraInvertida;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite uma palavra: ", function(palavra) {
  if (verificarPalindromo(palavra)) {
    console.log(`${palavra} é um palíndromo`);
  } else {
    console.log(`${palavra} não é um palíndromo`);
  }
  rl.close();
});
