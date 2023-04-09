"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function generatePassword(length) {
    var charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_!@£§$%/';
    var password = '';
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomIndex);
    }
    return password;
}
var password = generatePassword(10);
console.log("Sua senha aleat\u00F3ria \u00E9: ".concat(password));
