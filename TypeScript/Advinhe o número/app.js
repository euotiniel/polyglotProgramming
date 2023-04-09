"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
// Gera um número aleatório entre 1 e 100
var randomNumber = Math.floor(Math.random() * 100) + 1;
// Cria uma interface para leitura da linha de comando
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Pede para o usuário adivinhar o número
rl.question('Tente adivinhar o número entre 1 e 100: ', function (answer) {
    // Converte a resposta do usuário para um número inteiro
    var guess = parseInt(answer);
    // Verifica se o palpite do usuário está correto
    if (guess === randomNumber) {
        console.log('Parabéns! Você acertou o número.');
    }
    else {
        console.log("Infelizmente, voc\u00EA errou. O n\u00FAmero era ".concat(randomNumber, "."));
    }
    // Fecha a interface de leitura da linha de comando
    rl.close();
});
