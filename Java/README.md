<h1 align="center">Java</h1>

<img src="./assets/Java.png" alt="Java" />

<br />
Java é uma linguagem de programação de alto nível, orientada a objetos, projetada para ser portátil e independente de plataforma. Ela foi criada pela Sun Microsystems (adquirida pela Oracle Corporation em 2010) nos anos 90 e desde então tem sido amplamente utilizada no desenvolvimento de aplicativos para desktop, web e dispositivos móveis.

O nome "Java" foi inspirado no nome de uma espécie de café da Indonésia, onde um dos desenvolvedores da linguagem estava visitando na época. Além disso, o termo também é uma abreviação de "Oak", o nome original da linguagem, que foi alterado devido a uma questão de marca registrada.

Uma das principais características da linguagem Java é sua portabilidade, ou seja, um programa escrito em Java pode ser executado em qualquer plataforma que tenha uma máquina virtual Java (JVM) instalada. Isso permite que os desenvolvedores escrevam aplicativos que possam ser executados em diferentes sistemas operacionais sem a necessidade de reescrever o código-fonte.

Além disso, a linguagem Java possui uma grande biblioteca de classes e métodos pré-construídos (conhecidos como "Java Standard Library"), o que facilita o desenvolvimento de aplicativos complexos. A segurança é outra preocupação importante na linguagem Java, que possui recursos incorporados para evitar vulnerabilidades de segurança comuns.


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

<p>A linguagem de programação Java é uma das linguagens mais populares e amplamente utilizadas no mundo da programação. Ela é utilizada para desenvolver uma ampla variedade de aplicativos, desde aplicativos de desktop até aplicativos web e móveis.</p>

Algumas das áreas em que Java é comumente usada incluem:

+ <strong>Desenvolvimento de aplicativos de desktop:</strong> através do uso de frameworks como o Swing, é possível criar aplicativos de desktop em Java.

+ <strong>Desenvolvimento de aplicativos web: </strong> Java é frequentemente utilizado para criar aplicativos web dinâmicos, juntamente com frameworks como o Spring e o Hibernate.

+ <strong>Desenvolvimento de aplicativos móveis:</strong> com a plataforma Android sendo baseada em Java, muitos desenvolvedores utilizam a linguagem para criar aplicativos para dispositivos móveis.

+ <strong>Desenvolvimento de jogos:</strong> através de bibliotecas e frameworks, como o libGDX, é possível criar jogos em Java.

+ <strong>Desenvolvimento de sistemas de backend:</strong> Java é frequentemente utilizado para criar sistemas de backend robustos e escaláveis, juntamente com frameworks como o Spring e o Apache Struts.

> Java é uma linguagem versátil e amplamente utilizada que pode ser usada em uma variedade de áreas de desenvolvimento de software.

## 💻 Instalação

<p>O processo de instalação do Java é relativamente simples e pode variar um pouco dependendo do sistema operacional que você está usando. </p>

### Windows

Para instalar o Java no Windows, siga os seguintes passos:

1.	Acesse o <a href="https://www.oracle.com/technetwork/java/javase/downloads/index.html" target="_blank">site oficial da Oracle</a> para download do Java.

2.	Clique no botão "Download" ao lado da versão mais recente do Java. Certifique-se de selecionar a versão correta do Java para o seu sistema operacional (Windows, Mac, Linux, etc.) e para a arquitetura do seu processador (32 bits ou 64 bits).

3.	Na página de download, você pode ser solicitado a aceitar os termos e condições da Oracle antes de continuar. Se for o caso, leia os termos e condições e, se concordar, marque a caixa de seleção e clique em "Download".

4.	O arquivo de instalação do Java será baixado para o seu computador. Quando o download estiver concluído, clique duas vezes no arquivo para iniciar o processo de instalação.

5.	Na tela de instalação, siga as instruções na tela para instalar o Java. Isso pode incluir aceitar um contrato de licença, selecionar um local para instalar o Java e escolher as opções de instalação que você deseja. Geralmente, as configurações padrão são suficientes.

6.	Depois de concluir a instalação, reinicie o seu navegador da web ou quaisquer outros aplicativos que possam usar o Java para que as alterações entrem em vigor.

Para consultar o Java na sua máquina, abra o prompt de comando e digite:

```
java –version
```
Este comando irá exibir a versão do Java instalada em seu sistema, se ele estiver instalado. Se você receber uma mensagem de erro informando que o comando não foi reconhecido, isso provavelmente significa que o Java não está instalado ou não está configurado corretamente em seu sistema.

> Caso tenha problemas na instalação, visite a documentação oficial.

### Linux

Para instalar o Java  no Linux, siga os seguintes passos:

1.	Abra o terminal: Dependendo da distribuição Linux que você está usando, você pode encontrar o terminal no menu Aplicativos ou pressionando Ctrl + Alt + T no teclado.

2.	Execute o seguinte comando para instalar usando o gerenciador de pacotes da sua distribuição. Por exemplo, no Ubuntu ou Debian:

```
sudo apt-get update
```

```
sudo apt-get install default-jdk
```

Este comando instalará o OpenJDK, uma implementação livre e de código aberto do Java.

Digite o seguinte comando e pressione Enter:

```
java -version
```

Se o tudo estiver instalado corretamente em seu sistema, a versão do Java será exibida no terminal. 

### macOS

Para instalar o Java no Mac, siga os seguintes passos:

1.	Baixe o pacote de instalação do Java da <a href="https://www.oracle.com/technetwork/java/javase/downloads/index.html" target="_blank">página de download da Oracle</a>.

2.	Na página de download, procure a versão do Java que deseja instalar e clique no botão "Download".

3.	Depois que o download estiver concluído, abra o arquivo .dmg que você acabou de baixar..

4.	Clique duas vezes no arquivo de instalação. pkg e siga as instruções na tela para concluir a instalação.

5.	Depois que a instalação estiver concluída, você pode verificar se o Java está instalado corretamente executando o comando:

```
java -version
```

Se tudo estiver correto, isso exibirá a versão do Java.

Isso é tudo! Você agora deve ter o Java instalado em seu sistema. Se você tiver problemas ou precisar de mais ajuda, consulte a documentação da Oracle ou procure por tutoriais específicos para o seu sistema operacional.

## 🔧 VSCode

Tendo o Java instalado na sua máquina, para programar em Java no Visual Studio Code (VSCode), siga os seguintes passos:

1.  Abra o Visual Studio Code e instale a extensão "Java Extension Pack" para ter todas as extensões necessárias para desenvolvimento em Java.

2.   Depois de instalar a extensão, abra o painel de extensões no Visual Studio Code (clicando no ícone de cubo no menu lateral esquerdo ou pressionando Ctrl + Shift + X).

3.   Na barra de pesquisa, digite "Java Extension Pack" e selecione a extensão na lista de resultados.

4.  Clique no botão "Install" (Instalar) para instalar a extensão.

5.  Reinicie o Visual Studio Code após a instalação da extensão.

Crie um projeto Java. Para criar um novo projeto Java no Visual Studio Code, abra o menu "File" (Arquivo), selecione "New" (Novo), e em seguida, selecione "Java Project".

6. Execute o arquivo Java digitando o comando:

```
javac index.java
```

```
java index
```
> Sertifique se de que está na pasta certa. Repare que o 'index' é o nome do nosso arquivo Java, você deverá substitui-lo pelo nome do seu arquivo.

Se tudo estiver correto, o VSCode deve exibir a mensagem "Hello, world!" no terminal.

> Agora você sabe como programar em Java no VSCode! É possível configurar várias opções de configuração e depuração no VSCode para tornar o seu processo de desenvolvimento ainda mais fácil e produtivo.

## 🌐 Online code

<p>Existem várias plataformas online que permitem programar em Java sem precisar instalar um ambiente de desenvolvimento integrado localmente. Algumas opções populares são:</p>

+ <a href=" https://www.jdoodle.com/online-java-compiler/" target="_blank">JDoodle</a> 
+ <a href="https://replit.com/languages/java" target="_blank">Repl.it</a>
+ <a href="https://ideone.com/l/java_compiler" target="_blank">Ideone</a>
+ <a href="https://www.compilejava.net/" target="_blank">CompileJava</a>
+ <a href="https://codegym.cc/playground/java/" target="_blank">CodeGym</a>

Todos eles permitem que você escreva e execute código Java online, sem a necessidade de instalar qualquer software em seu computador. Basta acessar o site, escrever seu código, compilá-lo e executá-lo diretamente no navegador. Alguns deles também oferecem recursos adicionais, como a capacidade de salvar seu código, compartilhá-lo com outras pessoas e até mesmo aprender Java por meio de tutoriais interativos.

## 📖 Guia de estudo

Existem muitos recursos disponíveis para quem deseja aprender Java, incluindo <a href="https://docs.oracle.com/en/java/">documentação oficial</a>, tutoriais em vídeo e cursos on-line.

Se você deseja aprender ou se aprofundar, aqui está um índice de estudo para Java que pode ser útil:

<strong>Fundamentos de Java</strong>
+	Sintaxe básica de Java
+	Tipos de dados primitivos e objetos
+	Operadores
+	Controle de fluxo (condicionais, loops)
+	Arrays e coleções
+	Classes e objetos
+	Métodos e construtores
+	Herança e polimorfismo


<strong>Programação orientada a objetos</strong>
+	Encapsulamento e visibilidade
+	Abstração e interfaces
+	Tratamento de exceções
+	Anotações
+	Enumerações


<strong>Avançando em Java</strong>
+	Threads e concorrência
+	Streams e I/O
+	JDBC e bancos de dados relacionais
+	JavaFX e GUI (Interface Gráfica de Usuário)
+	Reflection e anotações personalizadas
+	Garbage collection e gerenciamento de memória


<strong>Desenvolvimento Web com Java</strong>
+	Servlets e JSP (JavaServer Pages)
+	Frameworks web (Spring, Struts)
+	Desenvolvimento de APIs RESTful
+	ORM (Object-Relational Mapping) com Hibernate

<strong>Desenvolvimento de aplicativos Android</strong>
+	Fundamentos do Android e SDK
+	Componentes de aplicativos Android (atividades, serviços, receptores de transmissão)
+	Interface do usuário com XML e Views
+	Persistência de dados com SQLite
+	Interação com a web usando HTTP e JSON

<strong>Ferramentas e tecnologias</strong>
+	Maven e Gradle
+	JUnit e testes automatizados
+	Git e controle de versão
+	IDEs populares (Eclipse, IntelliJ IDEA)

Bora começar a estudar!

## 🛠️  Ferramentas e bibliotecas

Java possui várias ferramentas e bibliotecas que auxiliam no desenvolvimento em várias árias, aqui alguma delas:

<strong>Desenvolvimento de aplicativos de desktop</strong>
+	Swing: biblioteca gráfica para a criação de interfaces gráficas de usuário (GUIs) em Java.
+	JavaFX: plataforma para desenvolvimento de aplicações ricas em mídia interativa e gráficos.

<strong>Desenvolvimento Web</strong>
+	Servlets: API para desenvolvimento de aplicações web em Java.
+	JSP (JavaServer Pages): tecnologia para criação de páginas web dinâmicas em Java.
+	JSF (JavaServer Faces): framework para construção de interfaces web baseadas em componentes.


<strong>Desenvolvimento de jogos</strong>
+	jMonkeyEngine: engine de jogos 3D para Java.
+	LibGDX: framework de desenvolvimento de jogos multiplataforma em Java.

<strong>Desenvolvimento de aplicativos móveis</strong>
+	Android SDK: conjunto de ferramentas para desenvolvimento de aplicativos Android em Java.

<strong>Banco de dados</strong>
+	JDBC (Java Database Connectivity): API para acesso a bancos de dados relacionais em Java.
+	Hibernate: framework para mapeamento objeto-relacional em Java.

<strong>Segurança</strong>
+	Spring Security: framework para segurança de aplicações web em Java.

Essas são apenas algumas das muitas ferramentas e bibliotecas disponíveis para desenvolvimento em Java. A escolha de qual utilizar depende do tipo de projeto, requisitos e preferências pessoais.

## 🚀 Projetos populares

Existem muitos projetos, plataformas, redes sociais e empresas que foram desenvolvidas usando Java. Aqui estão alguns exemplos:

+ <a href="https://developer.android.com/"  target="_blank">Android</a> - o sistema operacional móvel mais popular do mundo é desenvolvido usando Java.
+ <a href="https://www.linkedin.com/" target="_blank">LinkedIn</a> - a maior rede social de negócios do mundo foi desenvolvida usando Java.
+ <a href="https://www.minecraft.net/" target="_blank">Minecraft</a> - um dos jogos mais populares do mundo é desenvolvido em Java.
+ <a href="https://twitter.com/" target="_blank">Twitter</a> - a plataforma de mídia social mais popular do mundo usa Java em seu backend.
+ <a href="https://aws.amazon.com/" target="_blank">Amazon Web Services (AWS)</a> - a plataforma de nuvem líder mundial é desenvolvida em grande parte em Java.

## 👥 Comunidade

A comunidade Java é uma das maiores comunidades de desenvolvimento de software do mundo, com milhões de membros em todo o mundo. Eles compartilham conhecimento, trocam ideias e trabalham juntos para criar e aprimorar tecnologias Java, bem como para criar soluções de software que atendam às necessidades dos usuários.

A comunidade Java é conhecida por sua diversidade e inclusão, com pessoas de todas as origens e níveis de habilidade trabalhando juntas em projetos. A comunidade é apoiada por empresas líderes em tecnologia, como Oracle, IBM e Red Hat, bem como por organizações sem fins lucrativos, como a Apache Software Foundation.

A comunidade Java é responsável por muitos projetos de código aberto, como o Spring Framework, o Apache Tomcat, o Hibernate e o Maven, apenas para citar alguns. Esses projetos são amplamente usados em todo o mundo por desenvolvedores e empresas de todos os tamanhos.


Aqui estão alguns links para algumas das principais comunidades Python no Github:

+ <a href="https://github.com/spring-projects/spring-framework" target="_blank">Spring Framework</a> - uma das comunidades Java mais populares, o Spring Framework fornece uma estrutura abrangente e modular para o desenvolvimento de aplicativos Java. O Spring é conhecido por sua facilidade de uso, eficiência e flexibilidade, e é amplamente usado para construir aplicativos empresariais escaláveis e robustos.
+ <a href="https://github.com/eclipse-ee4j/" target="_blank">Jakarta EE</a> - uma comunidade Java que sucedeu o antigo Java EE (Java Enterprise Edition). Ele oferece um conjunto de especificações para a criação de aplicativos empresariais escaláveis e de alta performance em uma ampla gama de plataformas.


Aqui estão alguns perfis e hashtags que você pode seguir para se manter atualizado sobre as novidades da comunidade Java no Twitter:

+ <a href="https://twitter.com/Java" target="_blank">Java</a> - a conta oficial do Java no Twitter, com atualizações sobre o desenvolvimento da plataforma, notícias da comunidade e dicas para desenvolvedores.
+ <a href="https://twitter.com/Javalobby" target="_blank">Javalobby</a> - uma comunidade Java online que compartilha notícias, artigos, tutoriais e discussões sobre a plataforma Java e tecnologias relacionadas.
+ <a href="https://twitter.com/JavaMagazine" target="_blank">Java Magazine</a> - A conta oficial da revista Java, que publica artigos e recursos sobre a plataforma Java, tendências de desenvolvimento e melhores práticas.

## 👨🏽‍💼 Créditos

<p>Este repositório foi inicialmente criado pelo Otoniel Emanuel, um estudante de programação e apaixonado por tecnologia. Obviamente com o crescimento da repositório, outras pessoas também daram as suas contribuições.</p>

### 📱 Redes sociais

+ <a href="https://www.linkedin.com/in/otoniel-emanuel-b80727261/">LinkedIn</a>
+ <a href="https://www.instagram.com/eusouootis_">Instagram</a>


