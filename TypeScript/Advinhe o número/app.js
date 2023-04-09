"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var randomNumber = Math.floor(Math.random() * 100) + 1;
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Tente adivinhar o número entre 1 e 100: ', function (answer) {
    var guess = parseInt(answer);
    if (guess === randomNumber) {
        console.log('Parabéns! Você acertou o número.');
    }
    else {
        console.log("Infelizmente, voc\u00EA errou. O n\u00FAmero era ".concat(randomNumber, "."));
    }
    rl.close();
});
