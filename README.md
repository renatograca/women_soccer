### Termos e acordos

Ao iniciar este projeto, você concorda com as diretrizes do Código de Ética e Conduta e do Manual da Pessoa Estudante da Trybe.

---

# Boas vindas ao repositório do TFC - Trybe Futebol Clube!

Você já usa o GitHub diariamente para desenvolver os exercícios, certo? Agora, para desenvolver os projetos, você deverá seguir as instruções a seguir. Fique atento a cada passo, e se tiver qualquer dúvida, nos envie por Slack! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir deste repositório, utilizando uma branch específica e um Pull Request para colocar seus códigos.

---

# Sumário

- [Habilidades](#habilidades)
- [Entregáveis](#entregáveis)
  - [O que deverá ser desenvolvido](#o-que-deverá-ser-desenvolvido)
  - [Desenvolvimento](#desenvolvimento)
  - [Data de Entrega](#data-de-entrega)
- [Instruções para entregar seu projeto:](#instruções-para-entregar-seu-projeto)
    - [Antes de começar a desenvolver](#antes-de-começar-a-desenvolver)
    - [Durante o desenvolvimento](#durante-o-desenvolvimento)
    - [Execução de testes unitários](#execução-de-testes-unitários)
- [Como desenvolver](#como-desenvolver)
  - [Linter](#linter)
- [Requisitos do projeto:](#requisitos-do-projeto)
  - [Antes de começar:](#antes-de-começar)
  - [Dicas:](#dicas)
  - [⚠️ Leia-os atentamente e siga à risca o que for pedido. ⚠️](#️-leia-os-atentamente-e-siga-à-risca-o-que-for-pedido-️)
  - [👀 Observações importantes:](#-observações-importantes)
    - [Backend](#backend)
      - [1 - Crie um endpoint para o login de usuários](#1---crie-um-endpoint-para-o-login-de-usuários)
      - [2 - Crie um endpoint para listar as jogadoras de um clube em específico](#2---crie-um-endpoint-para-listar-as-jogadoras-de-um-clube-em-específico)
      - [3 - Crie um endpoint para listar todos os clubes cadastrados](#3---crie-um-endpoint-para-listar-todos-os-clubes-cadastrados)
      - [4 - Crie um endpoint para o cadastro de novas partidas](#4---crie-um-endpoint-para-o-cadastro-de-novas-partidas)
      - [5 - Crie um endpoint para o cadastro de novos gols](#5---crie-um-endpoint-para-o-cadastro-de-novos-gols)
      - [6 - Crie um endpoint para retornar a tabela do campeonato](#6---crie-um-endpoint-para-retornar-a-tabela-do-campeonato)
      - [7 - Crie um endpoint para retornar a tabela do artilheiras](#7---crie-um-endpoint-para-retornar-a-tabela-do-artilheiras)
    - [Frontend](#frontend)
      - [8 - Faça uma requisição para o endpoint `/ranking` e preencha uma tabela com os dados retornados](#8---faça-uma-requisição-para-o-endpoint-ranking-e-preencha-uma-tabela-com-os-dados-retornados)
      - [9 - Faça uma requisição para o endpoint `/scorers` e preencha uma tabela com os dados retornados](#9---faça-uma-requisição-para-o-endpoint-scorers-e-preencha-uma-tabela-com-os-dados-retornados)
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

Você vai arquitetr e desenvolver uma aplicação responsável pela serie A do campeonato __TFC - Trybe Futebol Clube__. Começando pela API, você vai desenvolver alguns endpoints (seguindo os princípios **REST**) que estarão conectados ao seu banco de dados. Lembre-se de aplicar os princípios **SOLID**!

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

### Antes de começar a desenvolver

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

### Durante o desenvolvimento

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

## Backend

### 1 - Crie um endpoint para o login de usuários

- A rota deve ser (`/login`).

- A rota deve receber os campos `Email` e `Senha` e esses campos devem ser validados no banco de dados.

- Na configuração do `JWT` **não use variáveis de ambientes** para não ter conflito com o avaliador.

- Um token `JWT` deve ser gerado e retornado caso haja sucesso no login. No seu payload deve estar presente o id, email e role do usuário.

- O body da requisição deve conter o seguinte formato:

  ```
  {
    "email": "string",
    "password": "string"
  }
  ```

**Os seguintes pontos serão avaliados:**

- Será validado que o campo "email" é obrigatório:

  Se o login não tiver o campo "email" o resultado retornado deverá retornar a mensagem abaixo, com um status http `401`:
  ```json
    "message": "All fields must be filled"
  ```
  
- Será validado que o campo "password" é obrigatório:

- Será validado que não é possível fazer login com um email inválido:

- Será validado que não é possível fazer login com uma senha inválida:

- Será validado que é possível fazer login com sucesso:

### 2 - Crie um endpoint para listar as jogadoras de um clube em específico

- A rota deve ser (`/player/:clubName`);

- A rota pode ser acessada por usuário logados ou não;

**Além disso, as seguintes verificações serão feitas:**

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

### 3 - Crie um endpoint para listar todos os clubes cadastrados

- Sua rota deve ser (`/clubs`);

- A rota pode ser acessada por usuário logados ou não;

**Além disso, as seguintes verificações serão feitas:**

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

### 4 - Crie um endpoint para o cadastro de novas partidas

- Sua rota deve ser (`/match`);

- A partida só pode ser criada caso o usuário esteja logado e o token JWT validado;

- O usuário logado precisa ter, necessariamente, a role `admin`;

***Além disso, as seguintes verificações serão feitas:**

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

### 5 - Crie um endpoint para o cadastro de novos gols

- Sua rota deve ser (`/goal`);

- O gol só pode ser criado caso o usuário esteja logado e o token JWT validado;

- O usuário logado precisa ter, necessariamente, a role `admin`;

***Além disso, as seguintes verificações serão feitas:**

- O corpo da requisição deverá ter o seguinte formato:

```json
{
  "matcherId": 1,
  "playerId": "424",
  "club_id": "16"
}
```

- O endpoint deve ser capaz de adicionar um novo gol para o respectivo time em uma determinada partida;

- O endpoint deve ser capaz de adicionar um novo gol para a jogadora específica;

- A jogadora que marcar um gol deverá corresponder ao elenco do time informado;

- Caso tente-se inserir um gol de uma jogadora que não pertence a um time envolvido na partida deverá retornar o seguinte erro:

```json
{ "message": "This player cannot score a goal for these teams" }
```

- Quando o gol for inserido com sucesso, deve-se retornar os dados atualizados da partida:

```json
  "matcherId": 1,
  "club_id_1": "16",
  "club_1_goals": "1",
  "club_id_2": "8",
  "club_2_goals": "0"
```

### 6 - Crie um endpoint para retornar a tabela do campeonato

- Sua rota deve ser (`/ranking`);

- A rota pode ser acessada por usuário logados ou não;

**Além disso, as seguintes verificações serão feitas:**

- Esse endpoint irá alimentar, no front-end, uma tabela idêntica ao exemplo abaixo:

  | Classificação | P  | J  | V  | E | D | GP | GC | SG | %    |
  |---------------|----|----|----|---|---|----|----|----|------|
  | Corinthians   | 38 | 15 | 12 | 2 | 1 | 44 | 13 | 31 | 84.4 |
  
  Onde:
   - `Classificação`: Nome do time;
   - `P`: Total de Pontos;
   - `J`: Total de Jogos;
   - `V`: Total de Vitórias;
   - `E`: Total de Empates;
   - `D`: Total de Derrotas;
   - `GP`: Gols marcados a favor;
   - `GC`: Gols marcados contra;
   - `SG`: Saldo total de gols;
   - `%`: Aproveitamento do time.

- Toda a regra de negócio e cálculos necessários deverão ser realizados no seu back-end. A aplicação front-end apenas renderizará essas informações;

- Para calcular o `Total de Pontos`, você deve levar em consideração que:

  - O time `vitorioso`: marcará +3 pontos;
  - O time `perdedor`: marcará 0 pontos;
  - Em caso de `empate`: ambos os times marcam +1 ponto.

- O campo referente ao `Aproveitamento do time` obtêm o percentual através da seguinte fórmula: `P/(Jx3)*100`, onde:
  
  - `P`: Total de Pontos;
  - `J`: Total de Jogos.

  Obs.: O seu resultado deverá ser limitado a `uma casa decimal`.
  
- O resultado deverá ser ordenado, sempre de forma decrescente, levando em consideração a quantidade de pontos que o time acumulou. Em caso de empate no `Total de Pontos` você deve levar em consieração:
  
  - Total de Vitórias;
  - Saldo total de gols;
  - Gols marcados a favor;
  - Gols marcados contra.

- A resposta desse endpoint deve listar a tabela de classificação, constando todos os times já ordenados:

  ```json
  [
    {
      "name": "Corinthians",
      "TotalPoints": 38,
      "TotalGames": 15,
      "TotalVictories": 12,
      "TotalDraws": 2,
      "TotalLooses": 1,
      "GoalsFavor": 44,
      "GoalsOwn": 13,
      "GoalsBalance": 31,
      "Efficiency": 84.4
    },
    {
      "name": "Palmeiras",
      "TotalPoints": 37,
      "TotalGames": 15,
      "TotalVictories": 11,
      "TotalDraws": 4,
      "TotalLooses": 0,
      "GoalsFavor": 45,
      "GoalsOwn": 13,
      "GoalsBalance": 32,
      "Efficiency": 82.2,
    },
    ...
  ]
  ```
  ⚠️ **Atenção:** ⚠️
  
  Por padrão a resposta de todos os seus endpoints deverão estar em inglês, mesmo a renderização no front-end estando em português.

### 7 - Crie um endpoint para retornar a tabela do artilheiras

- Sua rota deve ser (`/scorers`);

- A rota pode ser acessada por usuário logados ou não;

**Além disso, as seguintes verificações serão feitas:**

- A classificação da artilharia utilizará como parâmetro a quantidade total de gols marcados por uma jogadora;

- A exibição será ordenada de forma decrescente de gols realizados;

- Em caso de empate você deverá agrupar todas as jogadoras em uma mesma posição, por exemplo, todas as jogadoras com `x gols` estarão na mesma posição da tabela;

- A ordenação em uma mesma posição será realizada pela ordem alfabética dos nomes.

- A resposta desse endpoint deve listar a tabela de artilheiros, já ordenada:

```json
[
  {
    "player" : "Cristiane",
    "club" : "Santos",
    "goals" : 5
  },
  {
    "player" : "Mariana Alves",
    "club" : "Palmeiras",
    "goals" : 5
  },
  {
    "player" : "Cacau",
    "club" : "Corinthians",
    "goals" : 5
  },
  {
    "player" : "Carol Baiana",
    "club" : "Palmeiras",
    "goals" : 4
  },
  {
    "player" : "Thayná",
    "club" : "Palmeiras",
    "goals" : 4
  },
  ...
  {
    "player" : "Gabi Zanotti",
    "club" : "Corinthians",
    "goals" : 1
  },
  {
    "player" : "Diany",
    "club" : "Corinthians",
    "goals" : 1
  }
]
```

## Frontend

### 8 - Faça uma requisição para o endpoint `/ranking` e preencha uma tabela com os dados retornados

A tabela de classificação deve ter uma primeira linha com os headers `Classificação`, `P`, `J`, `V`, `E`, `D`, `GP`, `GC`, `SG`, `%` e as demais linhas do corpo com as respectivas informações dos times.

**Os seguintes pontos serão avaliados:**

```
- Preenche a tabela com os dados retornados
- Verifica se a tabela de classificação tem 10 colunas
- Verifica se a tabela tem uma linha para cada time
```

### 9 - Faça uma requisição para o endpoint `/scorers` e preencha uma tabela com os dados retornados

A tabela de artilharia deve ter uma primeira linha com os headers `Ranking`, `Jogador`, `Clube`, `Gols`, e as demais linhas do corpo com as respectivas informações das artilheiras.

**Os seguintes pontos serão avaliados:**

```
- Preenche a tabela com os dados retornados
- Verifica se a tabela de artilharia tem 4 colunas
- Verifica se as artilheiras estão agrupadas corretamente de acordo com os gols realizados
```

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
