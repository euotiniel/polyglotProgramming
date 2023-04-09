<h1 align="center">Criptografia na cifra de César</h1>

O exercício consiste em implementar um programa em TypeScript que criptografa e descriptografa mensagens usando a cifra de César.

A cifra de César é uma técnica de criptografia simples que consiste em substituir cada letra da mensagem original por outra letra que esteja a um determinado número de posições à frente (ou atrás) no alfabeto. O número de posições é o "deslocamento" e pode ser qualquer número inteiro.

Para implementar a cifra de César em TypeScript, o programa solicita que o usuário digite a mensagem que deseja criptografar, bem como o deslocamento que será usado na criptografia. O programa então itera sobre cada caractere da mensagem e determina o caractere correspondente na mensagem criptografada usando o deslocamento especificado. O programa também implementa uma função para descriptografar mensagens criptografadas, usando o deslocamento negativo.

## Testar

Para executar esse código em sua máquina siga os seguintes passos:

1. Começa por fazer um clone do repositório

```
git clone https://github.com/otonielemanuel/polyglotProgramming.git
```

2. Verifique se tem o TypeScipt instalado globalmente no seu computador.

> Verifique o README principal do TypeScript para saber mais sobre a instalação.

3. Abra a pasta do exercícios que queira testar. Pelo VSCode por exemplo.


4.  Execute o seguinte comando antes de compilar:

```
npm install -g ts-node
```

5.  Digite o seguinte comando para baixar alguns pacotes:

```
npm i --save-dev @types/readline-sync
```

6. Execute o programa com o seguinte código:

```
ts-node app.ts
```

E agora, provavelmente você já deve ter o exercício "Criptografia" rodando na sua máquina.
