<h1 align="center">Ruby</h1>

<p align="center">
<img src="./assets/ruby.png" alt="Ruby" height="200"  />
</p>

<p>Ruby é uma linguagem de programação de código aberto criada em 1995 pelo programador japonês Yukihiro Matsumoto. O nome "Ruby" para a linguagem de programação não tem uma explicação clara e oficial. Acredita-se que Yukihiro Matsumoto escolheu o nome Ruby porque ele queria um nome que fosse agradável de se ouvir e que fosse fácil de lembrar.</p>

<p>A linguagem é projetada para ser fácil de ler e escrever, com uma sintaxe limpa e concisa que permite aos desenvolvedores escreverem programas rapidamente e com menos código.</p>

<p>Uma das características mais distintas de Ruby é sua ênfase em programação orientada a objetos (POO). Em Ruby, tudo é um objeto, desde os tipos de dados básicos, como strings e números, até as funções e métodos. Isso torna a linguagem poderosa e flexível, permitindo que os desenvolvedores criem programas complexos e modulares.</p>

## 📚 Índice

+ [Para que serve?](#🧰-para-que-serve)
+ [Instalação](#💻-instalação)
+ [VSCode](#🔧-vscode)
+ [Online Code](#🌐-online-code)
+ [Guia de estudo](#📖-guia-de-estudo)
+ [Ferramentas e bibliotecas](#🛠️-ferramentas-e-bibliotecas)
+ [Projetos  populares](#🚀-projetos-populares)
+ [Comunidade](#👥-comunidade)
+ [Créditos](#👨🏽‍💼-créditos)

## 🧰 Para que serve?

<p>Ruby é uma linguagem de programação versátil que pode ser usada em uma variedade de áreas e domínios de programação.</p>

+ <strong>Desenvolvimento web:</strong> Ruby é amplamente utilizado para o desenvolvimento web, principalmente por meio do framework Ruby on Rails. 

+ <strong>Automação de tarefas: </strong> Ruby é frequentemente usado para criar scripts e programas de automação de tarefas, pois é uma linguagem fácil de aprender e usar. 

+ <strong>Processamento de dados: </strong> Ruby é uma linguagem de programação muito útil para processamento de dados, especialmente em conjunto com outras ferramentas como o Apache Hadoop. Com Ruby, você pode facilmente processar grandes quantidades de dados para análise e insights.

+ <strong>Jogos e entretenimento:</strong> Ruby é usado em jogos e entretenimento, graças a bibliotecas como o Gosu, que permite criar jogos 2D e 3D usando Ruby.

+ <strong>Aplicativos de desktop: </strong> Ruby é usado para criar aplicativos de desktop usando ferramentas como o Shoes, que oferece uma interface gráfica do usuário (GUI) fácil de usar para criar aplicativos de desktop.

## 💻 Instalação

<p>Aqui estão as etapas básicas para instalar o Ruby em um sistema operacional Windows, macOS ou Linux:</p>

<strong>Windows</strong>

1. Baixe o instalador Ruby mais recente para Windows no <a href="https://rubyinstaller.org/downloads/" target="_blank">site oficial.</a>

2. Execute o instalador e siga as instruções na tela para concluir a instalação.

3. Adicione o caminho de instalação do Ruby ao PATH do sistema operacional.

4. Verifique se a instalação foi bem-sucedida, abra o prompt de comando do Windows e digite o comando:

```ruby
ruby -v
```

> Se tudo estiver correto, o prompt retornará a versão do Ruby instalada. Daí é só codar!

<strong>Linux</strong>

1. Abra o terminal e digite o seguinte comando para instalar o Ruby:

```
sudo apt-get install ruby-full
```
2. Verifique se a instalação foi bem-sucedida, abra um terminal e digite o comando:

```
ruby –v
```
> Se tudo estiver correto, o terminal retornará a versão do Ruby instalada. Daí é só codar!

<strong>macOS</strong>

1. Instale o gerenciador de pacotes Homebrew, caso ainda não o tenha instalado, digitando o seguinte comando em um terminal:

```
/bin/bash -c "$(curl –fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

2. Instale o Ruby usando o Homebrew digitando o seguinte comando em um terminal:

```
brew install ruby
```

3. Verifique se a instalação foi bem-sucedida, abra um terminal e digite o comando:

```
ruby -v
```
> Se tudo estiver correto, o terminal retornará a versão do Ruby instalada. Daí é só codar.

<p>Existem outras maneiras de instalar o Ruby, dependendo do sistema operacional e do gerenciador de pacotes que você está usando. Consulte a documentação oficial do Ruby para obter mais informações e opções de instalação.</p>

## 🔧 VSCode

Tendo o Ruby instalado na sua máquina, para programar no Visual Studio Code, siga os seguintes passos:

1. Instale a extensão "Ruby" do VS Code. Para fazer isso, abra o VS Code e pressione "Ctrl+Shift+X" ou clique no ícone de extensão no canto esquerdo da barra lateral. Pesquise por "Ruby" e instale a extensão com o nome "Ruby" desenvolvida por Peng Lv.

2. Crie um novo projeto Ruby usando o comando:

```
rails new nome-do-seu-projeto
```

Este comando irá criar um novo projeto Ruby na pasta "nome-do-seu-projeto".

Abra a pasta do seu projeto no VS Code usando o comando:

```
cd nome-do-seu-projeto
``` 
Isso irá abrir o VS Code com a pasta do seu projeto.

3. Para executar o seu código Ruby, você pode usar o terminal integrado do VS Code pressionando "Ctrl+Shift+". Digite ruby nome-do-seu-arquivo.rb` para executar o seu código Ruby.

> Com essas etapas, você deve estar pronto para começar a programar em Ruby no VS Code!

## 🌐 Online code

<p>Existem várias plataformas online para se programar em Ruby. Algumas das mais populares são:</p>

+ <a href="https://rubymonk.com/" target="_blank">RubyMonk</a> 
+ <a href="https://repl.it/languages/ruby" target="_blank">Repl.it</a>
+ <a href="https://www.hackerrank.com/domains/ruby" target="_blank">HackerRank</a>

## 📖 Guia de estudo

Existem muitos recursos disponíveis para quem deseja aprender Ruby. Se você é um iniciante em Ruby, aqui está um índice sugerido de tópicos de estudo:

<strong>Introdução ao Ruby</strong>
+	Escreva seu primeiro "Olá, mundo!" programa em Ruby
+	Aprenda sobre a sintaxe básica do Ruby, incluindo variáveis, tipos de dados, estruturas de controle de fluxo e funções

<strong>Programação orientada a objetos</strong>
+	Entenda os conceitos fundamentais da programação orientada a objetos, como classes, objetos, métodos e herança
+	Aprenda a criar e usar classes em Ruby, definir métodos e instanciar objetos
+	Explore conceitos avançados de orientação a objetos, como polimorfismo, encapsulamento e interfaces

<strong>Bibliotecas e frameworks Ruby</strong>
+	Aprenda sobre as bibliotecas padrão do Ruby e como usá-las em seus programas
+	Explore os frameworks Ruby populares, como o Ruby on Rails para desenvolvimento web, o Sinatra para aplicativos web mais leves e o RSpec para testes automatizados

<strong>Tópicos avançados em Ruby</strong>
+	Aprenda sobre os recursos mais avançados do Ruby, como blocos, módulos e mixins
+	Explore como usar Ruby para trabalhar com bancos de dados, processamento de dados e desenvolvimento de aplicativos móveis
+	Aprenda sobre tópicos de desempenho e otimização em Ruby

<strong>Projetos em Ruby</strong>
+	Escolha um projeto de sua preferência e comece a desenvolver em Ruby, aplicando tudo que aprendeu anteriormente, como: gerador de senha, conversor de moedas, blog, etc
+	Pratique escrevendo testes automatizados para seus projetos
+	Procure projetos open source em Ruby e contribua com o código, documentação ou testes

Espero que este índice lhe dê uma ideia de como começar a estudar Ruby e o ajude a avançar em sua jornada de aprendizado!

## 🛠️  Ferramentas e bibliotecas

Existem várias ferramentas e bibliotecas disponíveis para desenvolvedores que programam em Ruby. Veja a lista de algumas das mais populares separadas por áreas de uso:

<strong>Desenvolvimento Web</strong>
+	Ruby on Rails
+	Sinatra
+	Hanami
+	Grape
+	Padrino
+	Cuba
+	Ramaze

<strong>Gerenciamento de Pacotes e Dependências</strong>
+	RubyGems
+	Bundler
+	Gemnasium
+	Dependabot
+	Greenkeeper

<strong>Testes Automatizados</strong>
+	RSpec
+	Minitest
+	Cucumber
+	Capybara
+	Selenium WebDriver
+	SitePrism


<strong>Mapeamento Objeto-Relacional (ORM)</strong>
+	ActiveRecord
+	Sequel
+	DataMapper
+	ROM

<strong>Processamento de Background</strong>
+	Sidekiq
+	DelayedJob
+	Resque
+	Sneakers
+	Shoryuken

<strong>Análise de Dados e Visualização</strong>
+	Daru
+	Statsample
+	Gnuplot
+	Gruff
+	Rubyvis

<strong>Manipulação de Imagem</strong>
+	MiniMagick
+	RMagick
+	ChunkyPNG
+	Vips

<strong>Automação e Scripting</strong>
+	Thor
+	Rake
+	Capistrano
+	Shell Ruby

Essas são apenas algumas das muitas ferramentas e bibliotecas disponíveis em Ruby, mas elas cobrem uma variedade de áreas comuns de desenvolvimento.

## 🚀 Projetos populares

Ruby é uma linguagem de programação popular e muitas empresas de sucesso usam ou já usaram Ruby para desenvolver seus projetos. Aqui estão alguns exemplos de projetos populares e empresas que usam Ruby:

+ <a href="https://github.com/" target="_blank">GitHub</a> - a plataforma de gerenciamento de código Git, que é a base do GitHub, é escrita em Ruby.

+ <a href="https://www.kickstarter.com/" target="_blank">Kickstarter</a> - o site de financiamento coletivo é construído usando Ruby on Rails e outras tecnologias.

+ <a href="https://www.twitch.tv/directory" target="_blank">Twitch</a> - a plataforma de streaming ao vivo de jogos e conteúdo criado por usuários é construída com Ruby on Rails e outras tecnologias.

+ <a href="https://twitter.com/i/flow/login" target="_blank">Twitter</a> - embora o Twitter tenha começado com Ruby, hoje usa principalmente Scala e Java, mas ainda usa alguns componentes em Ruby, como o framework de web Ruby on Rails.

## 👥 Comunidade

A comunidade Ruby é uma das mais vibrantes e ativas dentro da comunidade de desenvolvedores. É uma comunidade que valoriza o compartilhamento de conhecimento e apoio mútuo, o que faz com que seja um ótimo lugar para os desenvolvedores Ruby iniciantes e experientes crescerem e desenvolverem suas habilidades.

Aqui estão alguns links para a comunidade Ruby no GitHub:

+ Ruby: https://github.com/ruby/ruby
+ Rails: https://github.com/rails/rails
+ Sinatra: https://github.com/sinatra/sinatra
+ Hanami: https://github.com/hanami/hanami

Aqui estão os links dos perfis do Twitter relacionados a Ruby:

+ Ruby: https://twitter.com/ruby_lang
+ Rails: https://twitter.com/rails
+ RubyGems: https://twitter.com/rubygems
+ Sinatra: https://twitter.com/sinatra

## 👨🏽‍💼 Créditos

<p>Este repositório foi inicialmente criado pelo Otoniel Emanuel, um estudante de programação e apaixonado por tecnologia. Obviamente com o crescimento da repositório, outras pessoas também daram as suas contribuições.</p>

### 📱 Redes sociais

+ <a href="https://www.linkedin.com/in/otoniel-emanuel-b80727261/" target="_blank">LinkedIn</a>
+ <a href="https://www.instagram.com/eusouootis_" target="_blank">Instagram</a>


