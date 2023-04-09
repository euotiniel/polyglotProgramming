"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
function verificarPalindromo(palavra) {
    // Converte a palavra para minúsculas e remove espaços em branco
    palavra = palavra.toLowerCase().replace(/\s/g, "");
    // Inverte a palavra usando o método Array.reverse() e junta os caracteres novamente em uma string
    var palavraInvertida = palavra.split("").reverse().join("");
    // Compara a palavra original com a palavra invertida e retorna true se forem iguais
    return palavra === palavraInvertida;
}
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Digite uma palavra: ", function (palavra) {
    if (verificarPalindromo(palavra)) {
        console.log("".concat(palavra, " \u00E9 um pal\u00EDndromo"));
    }
    else {
        console.log("".concat(palavra, " n\u00E3o \u00E9 um pal\u00EDndromo"));
    }
    rl.close();
});
