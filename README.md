### Termos e acordos

Ao iniciar este projeto, você concorda com as diretrizes do Código de Ética e Conduta e do Manual da Pessoa Estudante da Trybe.

---

# Boas vindas ao repositório do [nome do projeto]!

Você já usa o GitHub diariamente para desenvolver os exercícios, certo? Agora, para desenvolver os projetos, você deverá seguir as instruções a seguir. Fique atento a cada passo, e se tiver qualquer dúvida, nos envie por Slack! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir deste repositório, utilizando uma branch específica e um Pull Request para colocar seus códigos.

---

# Sumário

- [Boas vindas ao repositório do [nome do projeto]!](#boas-vindas-ao-repositório-do-nome-do-projeto)
- [Sumário](#sumário)
- [Habilidades](#habilidades)
- [Entregáveis](#entregáveis)
  - [O que deverá ser desenvolvido](#o-que-deverá-ser-desenvolvido)
  - [Desenvolvimento](#desenvolvimento)
    - [Data de Entrega](#data-de-entrega)
- [Instruções para entregar seu projeto:](#instruções-para-entregar-seu-projeto)
    - [ANTES DE COMEÇAR A DESENVOLVER:](#antes-de-começar-a-desenvolver)
    - [DURANTE O DESENVOLVIMENTO](#durante-o-desenvolvimento)
    - [Execução de testes unitários](#execução-de-testes-unitários)
- [Como desenvolver](#como-desenvolver)
  - [Linter](#linter)
- [Requisitos do projeto:](#requisitos-do-projeto)
  - [Antes de começar:](#antes-de-começar)
    - [⚠️ Leia-os atentamente e siga à risca o que for pedido. ⚠️](#️-leia-os-atentamente-e-siga-à-risca-o-que-for-pedido-️)
    - [👀 Observações importantes:](#-observações-importantes)
    - [2 - Sua aplicação deve ter o endpoint GET `/clubs`](#2---sua-aplicação-deve-ter-o-endpoint-get-clubs)
    - [3 - Sua aplicação deve ter o endpoint POST `/match`](#3---sua-aplicação-deve-ter-o-endpoint-post-match)
    - [4 - Sua aplicação deve ter o endpoint POST `/goal`](#4---sua-aplicação-deve-ter-o-endpoint-post-goal)
    - [5 - Sua aplicação deve ter o endpoint GET `/ranking`](#5---sua-aplicação-deve-ter-o-endpoint-get-ranking)
    - [5 - Sua aplicação deve ter o endpoint GET `/scorers`](#5---sua-aplicação-deve-ter-o-endpoint-get-scorers)
  - [Requisitos Bônus](#requisitos-bônus)
    - [Requisito Bônus X - Descrição do requisito](#requisito-bônus-x---descrição-do-requisito)
  - [Depois de terminar o desenvolvimento](#depois-de-terminar-o-desenvolvimento)
    - [Revisando um pull request](#revisando-um-pull-request)
- [Avisos Finais](#avisos-finais)

# Habilidades 

Nesse projeto, você vai construir um back-end dockerizado utilizando modelagem de dados através do Sequelize. Deverão ser criadas  regras de negócio e também conectar o back-end ao front-end. Você será capaz de:
 - Realizar a dockerização dos apps, network, volume e compose;
 - Modelar dados com **MySQL** atravéz do **Sequelize**;
 - Criar e associar tabelas usando `models` do `sequelize`;
 - Construir uma **API REST** com endpoints para consumir os models criados;
 - Fazer um `CRUD` utilizando `ORM`;

# Entregáveis

Para entregar o seu projeto você deverá criar um Pull Request neste repositório.

Lembre-se que você pode consultar nosso conteúdo sobre [Git & GitHub](https://course.betrybe.com/intro/git/) sempre que precisar!

---

## O que deverá ser desenvolvido

Você vai arquitetr e desenvolver uma aplicação responsável pela serie A do campeonato __[nome do projeto]__. Começando pela API, você vai desenvolver alguns endpoints (seguindo os princípios **REST**) que estarão conectados ao seu banco de dados. Lembre-se de aplicar os princípios **SOLID**!

O seu back-end deverá implementar regras de negócio para popular adequadamente a tabela disponível no front-end que será exibida para a pessoa usuária do sistema.

---

## Desenvolvimento

Você deve desenvolver uma aplicação dockerizada em `Node.js` usando o pacote `sequelize`.

Para fazer um post é necessário usuário e login, portanto será trabalhada a **relação entre** `user` e `post`. Também será necessário a utlização de categorias para seus posts, assim trabalhando a relação de `posts` para `categorias` e de `categorias` para `posts`.
 
### Data de Entrega

  - Projeto individual.

  - Serão `X` dias de projeto.

  - Data de entrega para avaliação final do projeto: `DD/MM/YYYY - 14:00h`.

---

# Instruções para entregar seu projeto:

### ANTES DE COMEÇAR A DESENVOLVER:

1. Clone o repositório
  * `git clone https://github.com/tryber/sd-0x-project-[nome-do-projeto].git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd sd-0x-project-[nome-do-projeto]-api`

2. Instale as dependências [**Caso existam**]
  * `npm install`

3. Crie uma branch a partir da branch `master`
  * Verifique que você está na branch `master`
    * Exemplo: `git branch`
  * Se não estiver, mude para a branch `master`
    * Exemplo: `git checkout master`
  * Agora crie uma branch à qual você vai submeter os `commits` do seu projeto
    * Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
    * Exemplo: `git checkout -b joaozinho-sd-0x-project-[nome-do-projeto]`

4. Adicione as mudanças ao _stage_ do Git e faça um `commit`
  * Verifique que as mudanças ainda não estão no _stage_
    * Exemplo: `git status` (deve aparecer listada a pasta _joaozinho_ em vermelho)
  * Adicione o novo arquivo ao _stage_ do Git
      * Exemplo:
        * `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
        * `git status` (deve aparecer listado o arquivo _joaozinho/README.md_ em verde)
  * Faça o `commit` inicial
      * Exemplo:
        * `git commit -m 'iniciando o projeto x'` (fazendo o primeiro commit)
        * `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

5. Adicione a sua branch com o novo `commit` ao repositório remoto
  * Usando o exemplo anterior: `git push -u origin joaozinho-sd-0x-project-[nome-do-projeto]`

6. Crie um novo `Pull Request` _(PR)_
  * Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-0x-project-[nome-do-projeto]/pulls)
  * Clique no botão verde _"New pull request"_
  * Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
  * Clique no botão verde _"Create pull request"_
  * Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
  * **Não se preocupe em preencher mais nada por enquanto!**
  * Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-0x-project-[nome-do-projeto]/pulls) e confira que o seu _Pull Request_ está criado

---

### DURANTE O DESENVOLVIMENTO

* Faça `commits` das alterações que você fizer no código regularmente

* Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto

* Os comandos que você utilizará com mais frequência são:
  1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
  2. `git add` _(para adicionar arquivos ao stage do Git)_
  3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
  4. `git push -u nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_
  5. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_

---

### Execução de testes unitários


```
Preencher aqui as instruções para realizar os testes localmente
```

---

# Como desenvolver

## Linter

Para garantir a qualidade do código, usaremos o [ESLint](https://eslint.org/) para fazer a sua análise estática.

Este projeto já vem com as dependências relacionadas ao _linter_ configuradas nos arquivos `package.json` nos seguintes caminhos:

- `sd-0x-project-[nome-do-projeto]/package.json`

Para poder rodar os `ESLint` em um projeto basta executar o comando `npm install` dentro do projeto e depois `npm run lint`. Se a análise do `ESLint` encontrar problemas no seu código, tais problemas serão mostrados no seu terminal. Se não houver problema no seu código, nada será impresso no seu terminal.

Você também pode instalar o plugin do `ESLint` no `VSCode`, bastar ir em extensions e baixar o [plugin `ESLint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

⚠ PULL REQUESTS COM ISSUES DE LINTER NÃO SERÃO AVALIADAS. ATENTE-SE PARA RESOLVÊ-LAS ANTES DE FINALIZAR O DESENVOLVIMENTO! ⚠

---
# Requisitos do projeto:

## Antes de começar:

### ⚠️ Leia-os atentamente e siga à risca o que for pedido. ⚠️

### 👀 Observações importantes:

O não cumprimento de um requisito, total ou parcialmente, impactará em sua avaliação.

<!-- Há um arquivo `index.js` no repositório. Não remova, nele, o seguinte trecho de código:

```javascript
app.get('/', (request, response) => {
  response.send();
});
``` -->

<!-- **Você irá precisar configurar as variáveis globais do MySQL.** Você pode usar esse [Conteúdo de variáveis de ambiente com NodeJS](https://blog.rocketseat.com.br/variaveis-ambiente-nodejs/) como referência.

**Faça essas configurações também para as variáveis de ambiente usadas nesses arquivo:**

`sd-0x-project-blogs-api/config/config.js`

```
module.exports = {
  development: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'blogs_api',
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
  test: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'blogs_api',
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
  production: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'blogs_api',
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
};
```

**(Neste arquivo e obrigatório deixar o nome do database como `"database": 'blogs_api'`)**

**É essencial usar essas 3 variávies no arquivo acima:** -->

<!-- #### Variáveis:

`host: process.env.HOSTNAME`

`user: process.env.MYSQL_USER`

`password: process.env.MYSQL_PASSWORD`

**Com elas que iremos conseguir conectar ao banco do avaliador automático** -->

<!-- #### Variável JWT (opcional):

`JWT_SECRET`

**Também poderá ser utilizada esta variável de ambiente para o SECRET do JWT** -->

### Dicas

#### Status HTTP

Tenha em mente que todas as "respostas" devem respeitar os [status do protocolo HTTP](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status) com base no que o REST prega.

Alguns exemplos:

  - Requisições que precisam de token mas não o receberam devem retornar um código de `status 401`;

  - Requisições que não seguem o formato pedido pelo servidor devem retornar um código de `status 400`;

  - Um problema inesperado no servidor deve retornar um código de `status 500`;

  - Um acesso ao criar um recurso, no nosso caso usuário ou post, deve retornar um código de `status 201`.

---

## Lista de Requisitos:

### 1 - Sua aplicação deve ter o endpoint GET `/player/:clubName`

**Os seguintes pontos serão avaliados:**

- Retorna todas as jogadoras de um determinado time especificado pelo `clubName` vindo da rota.

```json
{
	"club": {
		"id": 2,
		"clubName": "Bahia" 
	},
	"players": [
		{
			"id": 23,
			"name": "Anna Bia",
			"position": "GOLEIRA",
			"clubId": 2
		},
		{
			"id" : 24,
			"name" : "Dymenor",
			"position" : "LATERAL",
			"clubId" : 2
		},
		...
	],
}
```

### 2 - Sua aplicação deve ter o endpoint GET `/clubs`

**Os seguintes pontos serão avaliados:**

- Retorna todos os times cadastrados no banco de dados.

```json
{
  "clubs": [
    {
      "id" : 1,
      "name" : "Avaí/Kindermann"
    },
    {
      "id" : 2,
      "name" : "Bahia"
    },
    ...
    {
      "id" : 15,
      "name" : "São José-SP"
    },
    {
      "id" : 16,
      "name" : "São Paulo"
    }
  ]
}
```

### 3 - Sua aplicação deve ter o endpoint POST `/match`

**Os seguintes pontos serão avaliados:**

- O endpoint deve ser capaz de adicionar uma nova partida a sua tabela no banco de dados;

- O corpo da requisição deverá ter o seguinte formato:

```json
{
	"homeTeam": {
		"id": 16
	},
	"visitingTeam": {
		"id": 8
	}
}
```
- o campo `homeTeam` e `visitingTeam` precisam ser um objeto com a propriedade `id`;

- o campo `id` precisa ser um número. Esse campo é obrigatório;

- caso algum dos times não esteja cadastrado no banco de dados, deve-se retornar o seguinte erro:

```json
{ "message": "Team not found" }
```

- é necessário ter somente um mandante por partida, caso contrário, deve-se retornar o seguinte erro:

```json
{ "message": "Can not possible to create a match with two home teams" }
```

- é necessário ter somente um visitante por partida, caso contrário, deve-se retornar o seguinte erro:

```json
{ "message": "Can not possible to create a match with two visiting teams" }
```

- caso a partida seja inserida com sucesso, deve-se retornar os dados da partida:

```json
{
	"matchId": 1,
	"homeTeam": {
		"id": 16,
		"name": "São Paulo"
	},
	"visitingTeam": {
		"id": 8,
		"name": "Grêmio"
	}
}
```

### 4 - Sua aplicação deve ter o endpoint POST `/goal`

### 5 - Sua aplicação deve ter o endpoint GET `/ranking`

### 5 - Sua aplicação deve ter o endpoint GET `/scorers`

## Requisitos Bônus

### Requisito Bônus X - Descrição do requisito

--- 

## Depois de terminar o desenvolvimento

Para **"entregar"** seu projeto, siga os passos a seguir:

* Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas
  * No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**
  * No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**
  * No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-0x`

Se ainda houver alguma dúvida sobre como entregar seu projeto, [aqui tem um video explicativo](https://vimeo.com/362189205).

⚠ Lembre-se que garantir que todas as _issues_ comentadas pelo **Lint** estão resolvidas! ⚠

---

### Revisando um pull request

À medida que você e as outras pessoas que estudam na Trybe forem entregando os projetos, vocês receberão um alerta via Slack para também fazer a revisão dos Pull Requests dos seus colegas. Fiquem atentos às mensagens do "Pull Reminders" no Slack!

Use o material que você já viu sobre [Code Review](https://app.betrybe.com/course/real-life-engineer/code-review) para te ajudar a revisar os projetos que chegaram para você.

# Avisos Finais

Ao finalizar e submeter o projeto, não se esqueça de avaliar sua experiência preenchendo o formulário. Leva menos de 3 minutos!

Link: [FORMULÁRIO DE AVALIAÇÃO DE PROJETO](https://be-trybe.typeform.com/to/ZTeR4IbH)

O avaliador automático não necessariamente avalia seu projeto na ordem em que os requisitos aparecem no readme. Isso acontece para deixar o processo de avaliação mais rápido. Então, não se assuste se isso acontecer, ok?

---
