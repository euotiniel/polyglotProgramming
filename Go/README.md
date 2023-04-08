<h1 align="center">Go</h1>

<img src="./assets/golang.jpg" alt="Golang" />

<p>Go (ou Golang) é uma linguagem de programação de código aberto criada pela Google em 2009 por Robert Griesemer, Rob Pike e Ken Thompson. O nome "Go" foi escolhido para ser curto, fácil de digitar e memorizar.</p>
<p>Go é uma linguagem compilada, fortemente tipada, que visa tornar a programação mais eficiente e fácil, com um foco em concorrência e escalabilidade. Ela é projetada para ser simples e clara, com uma sintaxe legível e fácil de entender.</p>

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

<p>Go é uma linguagem que pode ser usada em muitas áreas diferentes, incluindo:</p>

+ <strong>Desenvolvimento de sistemas:</strong> Go é uma boa escolha para desenvolver aplicativos de sistema, como ferramentas de linha de comando e sistemas operacionais.

+ <strong>Desenvolvimento web:</strong> Go tem muitos frameworks e bibliotecas que facilitam o desenvolvimento de aplicativos web escaláveis e de alto desempenho, como o popular framework web chamado "gin".

+ <strong>Desenvolvimento de jogos:</strong> Go tem bibliotecas de gráficos 2D e 3D que podem ser usadas para criar jogos simples e complexos.

+ <strong>Ciência de dados</strong> Go tem várias bibliotecas para processamento de dados, visualização e aprendizado de máquina, como a biblioteca "Gonum".

> Em resumo, Go é uma linguagem de programação que pode ser usada em uma ampla variedade de aplicativos e projetos.

## 💻 Instalação

<p>O processo de instalação do Go pode variar de acordo com o sistema operacional que você está usando. No entanto, o site oficial da linguagem oferece instruções detalhadas para instalar o Go em várias plataformas, incluindo Windows, Linux e macOS.</p>

### Windows

Para instalar o Go no Windows, siga os seguintes passos:

1. Baixe o instalador MSI mais recente para o Windows na <a href="https://golang.org/dl/." target="_blank">página de downloads</a>  do Go.

2.	Execute o instalador MSI e siga as instruções para concluir a instalação.

3.	Adicione o diretório bin do Go ao PATH do sistema. Para fazer isso, clique com o botão direito em "Meu Computador" e selecione "Propriedades". Clique em "Configurações avançadas do sistema" e, em seguida, clique no botão "Variáveis de ambiente". Na seção "Variáveis do sistema", encontre a variável "Path" e clique em "Editar". Adicione o caminho para o diretório bin do Go (geralmente C:\Go\bin) no final da variável Path, separado por um ponto-e-vírgula (;). Clique em "OK" para fechar todas as janelas de diálogo.

Depois de concluir essas etapas, você pode verificar se a instalação do Go foi bem-sucedida digitando o seguinte comando no Prompt de Comando:

```
go version
```

Se o Go estiver instalado corretamente, você verá a versão instalada da linguagem.

### Linux

Para instalar o Go no Linux, siga os seguintes passos:

1.	Baixe o pacote de instalação apropriado para a sua arquitetura de processador do site oficial do Go.

2.	Extraia o pacote baixado em um diretório de sua escolha. Por exemplo, você pode extrair o pacote para o diretório /usr/local/go usando o seguinte comando:

```
tar -C /usr/local -xzf go$VERSION.$OS-$ARCH.tar.gz
```

> Onde $VERSION é a versão do Go que você baixou, $OS é o nome do sistema operacional que você está usando (por exemplo, linux ou darwin para macOS) e $ARCH é a arquitetura do processador (por exemplo, amd64 para sistemas de 64 bits).

3.	Adicione o diretório bin do Go ao seu PATH. Por exemplo, adicione a seguinte linha ao arquivo ~/.bashrc:

```
export PATH=$PATH:/usr/local/go/bin
```
4.	Reinicie o terminal ou execute o seguinte comando para atualizar o PATH:

```
source ~/.bashrc
```

Depois de concluir essas etapas, você pode verificar se a instalação do Go foi bem-sucedida digitando o seguinte comando no terminal:

```
go version
```

Se o Go estiver instalado corretamente, você verá a versão instalada da linguagem.

### macOS

Para instalar o Go no Mac, siga os seguintes passos:

1.	Baixe a versão mais recente do Go no <a href="https://golang.org/dl/" target="_blank">site oficial do Go</a>.

2.	Abra o arquivo '.pkg' que você baixou e siga as instruções do instalador.

3.	Adicione a pasta do Go ao seu PATH. Para fazer isso, abra o Terminal e digite o seguinte comando:

```
export PATH=$PATH:/usr/local/go/bin
```
Verifique se a instalação do Go foi concluída com êxito, digitando o seguinte comando no Terminal:

```
go version
```

Isso deve exibir a versão do Go que você acabou de instalar.

Com isso, você já terá o Go instalado em seu macOS e poderá começar a usá-lo para desenvolver aplicativos Go.

## 🔧 VSCode


## 🌐 Online code

<p>Existem vários editores online disponíveis para a linguagem Go, que permitem que você escreva, compile e execute seu código diretamente no navegador, sem precisar instalar nenhum software em seu computador. Alguns dos editores online mais populares para a linguagem Go são:</p>

+ <a href="https://play.golang.org/.">Go playground</a> 

+ <a href="https://repl.it/languages/go.">Repl.it</a>
+ <a href="https://gocode.io/.">GoCode.io</a>

Esses editores online são ótimas opções para experimentar a linguagem Go ou compartilhar código Go com outras pessoas sem precisar instalar nenhum software em seu computador.

## 📖 Guia de estudo

Aqui está um índice básico para você começar a estudar Golang:

<strong>Fundamentos da linguagem Go</strong>
+ Tipos básicos de dados em Go, como strings, inteiros, booleanos e arrays
+ Declaração e atribuição de variáveis
+ Estruturas de controle de fluxo, como condicionais e loops
+ Funções em Go, incluindo passagem de parâmetros e retorno de valores
+ Ponteiros em Go

<strong>Conceitos avançados de Go</strong>
+ Structs e interfaces em Go
+ Métodos em Go
+ Goroutines e Channels para programação concorrente em Go
+ Packages e módulos em Go
+ Manipulação de erros em Go
+ Testes e benchmarking em Go

<strong>Desenvolvimento de aplicativos em Go</strong>
+ Desenvolvimento de APIs em Go, usando frameworks como o Gin ou Echo
+ Conexão com bancos de dados em Go, usando drivers como o MySQL ou MongoDB
+ Autenticação e autorização em aplicativos web Go
+ Desenvolvimento de microserviços em Go
+ Integração de serviços externos usando bibliotecas Go, como o Stripe ou AWS SDK

<strong>Recursos adicionais</strong>
+ Aprenda a usar a documentação oficial da linguagem Go
+ Participe da comunidade Go, como fóruns, grupos de discussão, conferências e eventos
+ Pratique escrevendo seu próprio código Go e contribua para projetos open source em Go

Aqui estão alguns recursos que você pode utilizar para aprender mais sobre cada um desses tópicos:

+ <a href="https://tour.golang.org/welcome/1" target="_blank">A Tour of Go</a>
+ <a href="https://golang.org/doc/" target="_blank">Documentação oficial da linguagem Go</a>
+ <a href="https://gobyexample.com/" target="_blank">https://gobyexample.com/</a>
+ <a href="https://gowebexamples.com/" target="_blank">Go Web Examples</a>
+ <a href="https://play.golang.org/" target="_blank">Go Playground</a>
+ <a href="https://www.manning.com/books/go-in-action" target="_blank">Go in Action, livro sobre Go</a>

Espero que esta guia de estudo seja útil para você, Go!

## 🛠️  Ferramentas e bibliotecas

Existem várias ferramentas e bibliotecas disponíveis para desenvolvimento com Golang. Aqui estão algumas delas, separadas por áreas:

<strong>Desenvolvimento Web</strong>
+	Gin: um framework web leve e rápido com recursos avançados de roteamento, middleware e manipulação de solicitações e respostas HTTP.
+	Echo: um framework web minimalista e rápido com recursos integrados de middleware e roteamento.
+	Gorilla: uma coleção de pacotes e ferramentas para criar aplicativos da web em Go, incluindo pacotes para roteamento, manipulação de sessão, autenticação, e muito mais.
+	Martini: um framework web simples e flexível que segue o princípio de "martini clássico" de ser simples e suave.
+	Beego: um framework web completo e de alto desempenho que fornece uma estrutura MVC e recursos avançados, como suporte ao ORM e ao cache.

<strong>Processamento de Dados e Ciência de Dados</strong>
+	Gorp: uma biblioteca de mapeamento de objeto-relacional para Go, semelhante ao GORM, mas com foco em bancos de dados relacionais.
+	Gonum: uma biblioteca de computação numérica que inclui recursos como álgebra linear, otimização, estatística, e muito mais.
+	Gorgonia: uma biblioteca de aprendizado de máquina que fornece uma API para construir e treinar modelos de rede neural em Go.
+	Golang Dataframe: uma biblioteca para manipulação de dados em estilo de dataframe inspirado no pandas, mas para Go.


<strong>Banco de dados</strong>
+	GORM: um ORM (Object-Relational Mapping) que suporta vários bancos de dados, incluindo MySQL, PostgreSQL e SQLite.
+	go-sqlite3: um driver de banco de dados SQLite3 para Go.
+	go-mysql-driver: um driver de banco de dados MySQL para Go.
+	go-redis: um cliente Redis completo para Go.

<strong>Teste e Qualidade de Código</strong>
+	GoMock: uma biblioteca de mock que ajuda a criar mocks e stubs para testes em Go.
+	GoLint: uma ferramenta de análise estática que verifica o código Go em relação a um conjunto de regras de estilo e de qualidade.
+	GoCover: uma ferramenta que ajuda a medir a cobertura de teste do código Go.
+	GoTest: uma ferramenta de teste integrada que permite escrever e executar testes unitários em código Go.

Essas são apenas algumas das muitas ferramentas e bibliotecas disponíveis para Go. Cada uma delas tem suas próprias características e funcionalidades, por isso é importante escolher aquelas que melhor atendem às suas necessidades específicas.

## 🚀 Projetos populares

Aqui estão alguns projetos populares escritos em Go:

+ <a href="https://prometheus.io/">Prometheus</a> - um sistema de monitoramento de código aberto para coletar e armazenar métricas de sistemas e aplicativos.
+ <a href="https://kubernetes.io/">Kubernetes</a> - um sistema de orquestração de contêineres de código aberto para automação de implantação, dimensionamento e gerenciamento de aplicativos em contêineres.
+ <a href="https://www.influxdata.com/">InfluxDB</a> - um banco de dados de séries temporais de código aberto para armazenar, consultar e visualizar métricas e eventos.
+ <a href="https://www.terraform.io/">Terraform</a> - uma ferramenta de infraestrutura como código para criar, modificar e versionar a infraestrutura de nuvem.

## 👥 Comunidade

A comunidade Go é uma das mais ativas e acolhedoras do mundo da programação. Desde o lançamento inicial do Go em 2009, a linguagem ganhou uma base de usuários leais e dedicados, que contribuem ativamente para o desenvolvimento da linguagem e do ecossistema que a cerca.

A comunidade Go é conhecida por ser muito amigável e acolhedora a novos desenvolvedores. Existem muitos recursos disponíveis para ajudar novos usuários a aprender a linguagem, como documentação bem escrita, tutoriais, cursos online e fóruns de discussão. A comunidade também é conhecida por ser muito ativa nas redes sociais, como Twitter e Reddit, onde os desenvolvedores discutem sobre a linguagem, compartilham experiências e ajudam uns aos outros.


Aqui estão alguns links para algumas das principais comunidades Python no Github:

+ <a href="https://github.com/gin-gonic/gin" target="_blank">Gin</a>
+ <a href="https://github.com/labstack/echo" target="_blank">Echo</a> 
+ <a href="https://github.com/go-gorm/gorm" target="_blank">Gorm</a> 
+ <a href="https://github.com/gobuffalo/buffalo" target="_blank">Buffalo</a>
+ <a href="https://github.com/gohugoio/hugo" target="_blank">Hugo</a>

Comunidades no Reddit:

+ <a href="https://www.reddit.com/r/golang/">r/golang</a> - comunidade oficial de Go no Reddit com mais de 230.000 membros. Este subreddit é usado para discutir tópicos relacionados à linguagem Go, como notícias, tutoriais, bibliotecas, ferramentas e projetos.
+ <a href="https://www.reddit.com/r/learnprogramming/">r/learnprogramming</a> - embora não seja um subreddit exclusivo de Go, é um ótimo lugar para iniciantes em programação aprenderem Go e outras linguagens de programação. Há muitos tópicos relacionados a Go postados aqui, e a comunidade é muito ativa e prestativa.
+ <a href="https://www.reddit.com/r/godev/">r/golangdev</a> - este subreddit é dedicado a discussões sobre desenvolvimento em Go, incluindo dúvidas técnicas e ajuda com problemas específicos. É uma comunidade menor, mas ainda assim muito útil para desenvolvedores de Go.


Comunidades no Twitter:

+ <a href="https://twitter.com/golang">@golang </a> - a conta oficial do Go no Twitter, que compartilha notícias, atualizações e dicas sobre a linguagem.
+ <a href="https://twitter.com/gophers">@gophers</a> - uma conta dedicada a reunir a comunidade de desenvolvedores Go, compartilhando artigos, ferramentas e eventos relacionados ao Go.
+ <a href="https://twitter.com/golangweekly">@golangweekly</a> - uma newsletter semanal sobre a linguagem Go que também tem uma conta no Twitter que compartilha notícias e artigos relacionados.

## 👨🏽‍💼 Créditos

<p>Este repositório foi inicialmente criado pelo Otoniel Emanuel, um estudante de programação e apaixonado por tecnologia. Obviamente com o crescimento da repositório, outras pessoas também daram as suas contribuições.</p>

### 📱 Redes sociais

+ <a href="https://www.linkedin.com/in/otoniel-emanuel-b80727261/">LinkedIn</a>
+ <a href="https://www.instagram.com/eusouootis_">Instagram</a>


