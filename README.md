## 🚀 Won Games API

This is a [Strapi](https://strapi.io/) API built as one of the projects from the course [React Avançado](https://reactavancado.com.br/).

Where I am mastering my knowledge of APIs, Strapi, GraphQL, PostgreSQL.

### Screenshots

![Página de Início](https://github.com/oliveiraFreddie/screenshots/blob/6c4aede5e592b2391fa4a5052ae03ac4323f07ed/Captura%20de%20tela%202023-09-04%20171538.png)

![Menu](https://github.com/oliveiraFreddie/screenshots/blob/6c4aede5e592b2391fa4a5052ae03ac4323f07ed/Captura%20de%20tela%202023-09-04%20171602.png)

![Navegação](https://github.com/oliveiraFreddie/screenshots/blob/6c4aede5e592b2391fa4a5052ae03ac4323f07ed/Captura%20de%20tela%202023-09-04%20171647.png)

## Requirements

This project uses [PostgreSQL](https://www.postgresql.org/), so, in order to make it working, install in your local machine or use Docker.

The configuration to the Database can be found on [config/database.js](config/database.js)

## Development

After cloning this project, install the dependencies:

```
yarn install
```

And run using:

```
yarn develop
```

The urls to access are:

- `http://localhost:1337/admin` - The Dashboard to create and populate data
- `http://localhost:1337/graphql` - GraphQL Playground to test your queries

The first time to access the Admin you'll need to create an user.

## Dump data

This project uses `Postgres` and if you want all the data previously, unzip the [data.zip](data.zip), copy the `uploads` folder to [public/uploads](public/uploads) and restore the data from the `local.dump` file inside the zip.

#### EN

#### Description

The _Won Games API_ is a Strapi application that provides game data for a future e-commerce called _Won Games_. This API is responsible for serving information about the games that will be sold on the website. This data has been populated through a Scrapper that collected information from the _gog.com_. The API has been customized according to the Won Games brand.

#### Features

Providing game data to the frontend of the Won Games website.
User permission management for e-commerce maintenance.
Integration with Strapi plugins to support features such as CKEditor, GraphQL, and user and permission management.

#### Prerequisites

Before you begin using the API, make sure you have the following installed:

Node.js (version >=16.0.0 <=20.x.x)
npm (version >=6.0.0)
PostgreSQL (version 8.8.0)

#### PT-br

#### Descrição

A _Won Games API_ é uma aplicação Strapi que fornece dados de jogos para um futuro e-commerce _"Won Games"_. Essa API é responsável por servir informações sobre os jogos que serão vendidos no site. Esses dados foram populados através de um Scrapper que coletou informações do site _gog.com_. A API foi customizada de acordo com a marca Won Games.

#### Funcionalidades

Fornecimento de dados de jogos para o frontend do site Won Games. Fácil manutenção do e-commerce.
Integração com plugins Strapi para suportar funcionalidades como CKEditor, GraphQL e gerenciamento de usuários e permissões.

#### Pré-requisitos

Antes de começar a utilizar a API, certifique-se de ter instalado:

Node.js (versão >=16.0.0 <=20.x.x)
npm (versão >=6.0.0)
PostgreSQL (versão 8.8.0)
