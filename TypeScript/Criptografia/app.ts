import * as readlineSync from 'readline-sync';

function encryptMessage(message: string, shift: number): string {
  let encrypted = '';

  for (let i = 0; i < message.length; i++) {
    let charCode = message.charCodeAt(i);

    // Ignore non-letter characters
    if (charCode < 65 || charCode > 122 || (charCode > 90 && charCode < 97)) {
      encrypted += message.charAt(i);
      continue;
    }

    let shiftedCharCode = charCode + shift;

    // Handle wrap-around
    if (charCode <= 90 && shiftedCharCode > 90) {
      shiftedCharCode = (shiftedCharCode % 90) + 64;
    } else if (charCode >= 97 && shiftedCharCode > 122) {
      shiftedCharCode = (shiftedCharCode % 122) + 96;
    }

    encrypted += String.fromCharCode(shiftedCharCode);
  }

  return encrypted;
}

function decryptMessage(encryptedMessage: string, shift: number): string {
  return encryptMessage(encryptedMessage, -shift);
}

// Solicitar mensagem do usuário
const message = readlineSync.question('Digite a mensagem que deseja criptografar: ');

// Definir o deslocamento como 3
const shift = 3;

// Criptografar a mensagem
const encrypted = encryptMessage(message, shift);

console.log(`Mensagem criptografada: ${encrypted}`);

// Descriptografar a mensagem (apenas para verificar se a criptografia funcionou)
const decrypted = decryptMessage(encrypted, shift);

console.log(`Mensagem descriptografada: ${decrypted}`);
