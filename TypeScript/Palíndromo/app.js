"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
function verificarPalindromo(palavra) {
    palavra = palavra.toLowerCase().replace(/\s/g, "");
    var palavraInvertida = palavra.split("").reverse().join("");
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
