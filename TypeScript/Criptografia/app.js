"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
function encryptMessage(message, shift) {
    var encrypted = '';
    for (var i = 0; i < message.length; i++) {
        var charCode = message.charCodeAt(i);
        // Ignore non-letter characters
        if (charCode < 65 || charCode > 122 || (charCode > 90 && charCode < 97)) {
            encrypted += message.charAt(i);
            continue;
        }
        var shiftedCharCode = charCode + shift;
        // Handle wrap-around
        if (charCode <= 90 && shiftedCharCode > 90) {
            shiftedCharCode = (shiftedCharCode % 90) + 64;
        }
        else if (charCode >= 97 && shiftedCharCode > 122) {
            shiftedCharCode = (shiftedCharCode % 122) + 96;
        }
        encrypted += String.fromCharCode(shiftedCharCode);
    }
    return encrypted;
}
function decryptMessage(encryptedMessage, shift) {
    return encryptMessage(encryptedMessage, -shift);
}
// Solicitar mensagem do usuário
var message = readlineSync.question('Digite a mensagem que deseja criptografar: ');
// Definir o deslocamento como 3
var shift = 3;
// Criptografar a mensagem
var encrypted = encryptMessage(message, shift);
console.log("Mensagem criptografada: ".concat(encrypted));
// Descriptografar a mensagem (apenas para verificar se a criptografia funcionou)
var decrypted = decryptMessage(encrypted, shift);
console.log("Mensagem descriptografada: ".concat(decrypted));
