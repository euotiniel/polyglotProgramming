"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
function encryptMessage(message, shift) {
    var encrypted = '';
    for (var i = 0; i < message.length; i++) {
        var charCode = message.charCodeAt(i);
        if (charCode < 65 || charCode > 122 || (charCode > 90 && charCode < 97)) {
            encrypted += message.charAt(i);
            continue;
        }
        var shiftedCharCode = charCode + shift;
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
var message = readlineSync.question('Digite a mensagem que deseja criptografar: ');
var shift = 3;
var encrypted = encryptMessage(message, shift);
console.log("Mensagem criptografada: ".concat(encrypted));
var decrypted = decryptMessage(encrypted, shift);
console.log("Mensagem descriptografada: ".concat(decrypted));
