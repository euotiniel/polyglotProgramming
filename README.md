<h1 align="center">Polyglot Programming.ao</h1>

<p>Este é um projeto de código aberto no GitHub que contém uma coleção de exercícios populares de programação resolvidos em várias linguagens de programação, com o objetivo de ajudar outros desenvolvedores a aprender e aprimorar suas habilidades em programação, também é uma ótima opção para quem queira encontrar alguns desafios populares resolvidos e muito mais.</p>

### Objectivo

<p>O objetivo principal do projeto é fornecer uma plataforma para compartilhar soluções para exercícios populares de programação e ajudar outras pessoas que estão aprendendo a programar a aprimorar suas habilidades.</p>
<p>Além disso, o projeto também pode ser uma oportunidade para você aprimorar suas habilidades de programação, aprender novas técnicas e linguagens de programação, e se conectar com outros desenvolvedores.</p>

### Explicação do nome

<p>O nome "PolyglotProgramming" pode ser interpretado de várias maneiras diferentes, mas todas elas sugerem que este é um repositório que contém soluções para exercícios de programação em várias linguagens de programação, com o objetivo de promover o aprendizado e a prática de programação em diferentes contextos. E o “ao” é para fazer referência a origem do repositório, no caso: Angola.</p>

### Estrutura das pastas

<p>Cada linguagem de programação é armazenada em uma pasta, como se pode conferir. Cada uma dessas pastas, terá um README.md explicando detalhadamente a linguagem em uso.</p>
<p>Cada exercício é armazenado em uma pasta separada, com um arquivo README.md explicando o problema e suas soluções em várias linguagens de programação. Cada solução é armazenada em uma pasta separada para cada linguagem.</p>

## 💻 Linguagens incluídas

Para este repositório, foram escolhidas 5 linguagens de programação inicialmente. São elas:

+ <a href="https://github.com/otonielemanuel/polyglotProgramming/tree/main/Python">Python</a>
+ <a href="https://github.com/otonielemanuel/polyglotProgramming/tree/main/TypeScript">TypeScript</a>
+ <a href="https://github.com/otonielemanuel/polyglotProgramming/tree/main/Java">Java</a>
+ <a href="https://github.com/otonielemanuel/polyglotProgramming/tree/main/Go">Go</a>
+ <a href="https://github.com/otonielemanuel/polyglotProgramming/tree/main/Ruby">Ruby</a>

## 🔢 Exercícios resolvidos

Estão listados todos os exercícios resolvidos neste repositório em cada uma das 5 linguagens mencionadas. Fique à vontade para explorar os exercícios, experimentar diferentes abordagens e aprimorar seu conhecimento de programação. Esperamos que esses exercícios sejam úteis e divertidos para você!

+ Fibonacci - Esse exercício envolve escrever um programa que imprime a sequência de Fibonacci até um determinado número.

> Fibonacci é uma sequência numérica em que cada número subsequente é a soma dos dois números anteriores. A sequência começa com 0 e 1, e os próximos números são 1, 2, 3, 5, 8, 13, 21, 34 e assim por diante.

+   Impressão de árvore de asteriscos - Esse exercício envolve escrever um programa que imprime uma árvore de asteriscos em forma de triângulo.

+   Cálculo de fatorial - Esse exercício envolve escrever um programa que calcula o fatorial de um número.

> Fatorial é um conceito matemático que se refere ao produto de todos os números inteiros positivos consecutivos até um determinado número. O símbolo de fatorial é um ponto de exclamação (!) colocado após o número. Por exemplo, o fatorial de 5 é representado por 5! e é calculado multiplicando todos os números inteiros positivos de 1 a 5, ou seja: 5! = 1 x 2 x 3 x 4 x 5 = 120. O fatorial de 0 é 1 por definição.

+   FizzBuzz: Esse exercício envolve escrever um programa que imprime números de 1 a 100, substituindo os múltiplos de 3 por "Fizz", os múltiplos de 5 por "Buzz" e os múltiplos de ambos por "FizzBuzz".

+   Advinhe o número - Esse exercício envolve escrever um programa que gera um número aleatório e permite que o usuário adivinhe qual é esse número.

+   Gerador de senhas - Esse exercício envolve escrever um programa que gera uma senha aleatória e a exibe ao usuário.

+   Palíndromo - Esse exercício envolve escrever um programa que verifica se uma palavra é um palíndromo, ou seja, se pode ser lida da mesma forma de trás para frente.

+  Criptografia - Esse exercício envolve escrever um programa que criptografa ou descriptografa uma mensagem, usando um algoritmo de criptografia específico.

> Com o passar do tempo e a vossa ajuda, a lista vai crescendo. Você poderão sugerir exercícios que queiram ver resolvidos ou adicionares vocês mesmos.

## 🔧 VSCode

<p>E para nos acompanhar nessas Jornada, escolhemos o VSCode como nosso editor de texto, claro que os códigos irão funcionar em outros ambientes também, mas se puder use o VScode.</p>

<p>O VSCode (Visual Studio Code) é um editor de código-fonte desenvolvido pela Microsoft que é usado para escrever, depurar e editar código de várias linguagens de programação, como JavaScript, Python, C++, C#, entre outras. É um editor de código aberto e multiplataforma, disponível para Windows, macOS e Linux.</p>

### Instalação

Para instalar o VSCode no Windows, siga as seguintes instruções:

+ Acesse o site oficial do VSCode em https://code.visualstudio.com/.

+ Clique no botão "Download for Windows/Mac/Linux", dependendo do sistema operacional que você está usando.

+ Após o download ser concluído, execute o arquivo de instalação.

+ Siga as instruções na tela para concluir a instalação.

Quando a instalação estiver concluída, execute o VSCode e você estará pronto para começar a usá-lo.

### Linux (Debian/Ubuntu)

+ Abra um terminal e adicione a chave Microsoft GPG:

```
wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
sudo install -o root -g root -m 644 packages.microsoft.gpg /etc/apt/trusted.gpg.d/
```

+ Adicione o repositório do VSCode:

```
sudo sh -c 'echo "deb [arch=amd64 signed-by=/etc/apt/trusted.gpg.d/packages.microsoft.gpg] https://packages.microsoft.com/repos/vscode stable main" > /etc/apt/sources.list.d/vscode.list'
```

+ Atualize o índice do pacote do sistema:

```
sudo apt update
```

+ Instale o VSCode:

```
sudo apt install code
```

>Confira sempre o site oficial do VSCode antes de fazer a instalação, pois lá encontrará informações mais específicas e atuais sobre a maneira de instalação.

### masOS


+  Você pode instalar o VSCode no macOS usando o Homebrew, um gerenciador de pacotes para macOS. Para instalar o VSCode usando o Homebrew, abra o Terminal e digite o seguinte comando:

```
brew install --cask visual-studio-code
```

>Lembre-se de que, depois de instalar o VSCode, você pode personalizá-lo instalando extensões que adicionam recursos específicos para suas necessidades de desenvolvimento. Para instalar extensões, basta acessar o menu "Extensions" no VSCode e procurar a extensão que deseja instalar.



## 👨🏽‍💼 Créditos

<p>Este repositório foi inicialmente criado pelo Otoniel Emanuel, um estudante de programação e apaixonado por tecnologia. Obviamente com o crescimento da repositório, outras pessoas também daram as suas contribuições.</p>

### 📱 Redes sociais

+ <a href="https://www.linkedin.com/in/otoniel-emanuel-b80727261/">LinkedIn</a>
+ <a href="https://www.instagram.com/eusouootis_">Instagram</a>


