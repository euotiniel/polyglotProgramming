<h1 align="center">Fibonacci</h1>

O exercício de Fibonacci é um clássico da programação e consiste em calcular e exibir os termos da sequência de Fibonacci. A sequência de Fibonacci é uma série de números em que cada número subsequente é a soma dos dois números anteriores. A sequência começa com 0 e 1 e segue assim: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 e assim por diante.

O objetivo do exercício é implementar um programa que calcule e exiba os termos da sequência de Fibonacci para um determinado número n. Existem várias maneiras de fazer isso em programação, mas uma abordagem comum é usar recursão, onde uma função chama a si mesma para calcular os termos da sequência.

## Testar

Para executar esse código em sua máquina siga os seguintes passos:

1.  Começa por fazer um clone do repositório
```
git clone https://github.com/otonielemanuel/polyglotProgramming.git
```
2.  Verifique se tem o TypeScipt instalado globalmente no seu computador.

> Verifique o README principal do TypeScript para saber mais sobre a instalação.

3.  Abra a pasta do exercícios que queira testar. Pelo VSCode por exemplo.

4.  Execute o seguinte comando antes de compilar:

```
npm install -g ts-node
```
5.  Execute o programa com o seguinte código:

```
node app.ts
```
E agora, provavelmente você já deve ter o exercícios "Fibonacci" rodado na sua máquina.

> Nota: Neste exercício, são apenas exibidos os 20 primeiros números dessa sequência, caso queria alterar o número desses números, salve o programa, apague o arquivo <strong>app.js</strong> e execute o comando:

```
npx tsc app.ts
```

> Agora execute o seguinte comando para ver as alterações

```
node app.ts
```