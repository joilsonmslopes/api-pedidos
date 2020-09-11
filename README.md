# Meu_Pedido

Nesta aplicação fiz um CRUD de pedidos, onde utilizei um query builder
para criar as três tabelas e fazer o relacionamento entre elas,
que foram usadas nessa API.

**Tabela de Pratos:** *id*, *nome*, *serve_pessoas*, *valor*;
**Tabela de Status:** *id*, *nome*;
**Tabela de Pedidos:** *id*, *cliente*, *quantidade*, *prato_id*, *status_id*;

## Para esta API utilizei as tecnologias:
- [Node.js](https://nodejs.org/en/)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Knex.js](http://knexjs.org/)
- [Postgres](https://www.postgresql.org/)

### Container:
- [Docker](https://hub.docker.com/_/postgres) *(Docker + Postgres)*
  
### Package Manager:
- [Yarn](https://yarnpkg.com/):

### Packages:
- [express](https://www.npmjs.com/package/express)
- [body-parser](https://www.npmjs.com/package/body-parser)
- [joi](https://www.npmjs.com/package/@hapi/joi)
- [pg](https://www.npmjs.com/package/pg)
- [nodemon](https://www.npmjs.com/package/nodemon) *(Esta dependência, utilizo somente enquanto está em desenvolvimento)*

### Instalação:
Geralmente eu inicio o projeto utilizando o [NPM](https://www.npmjs.com/),
mas instalo as depedências utilizando o **YARN**.

```bash
npm init -y
yarn add express
yarn add body-parser
yarn add nodemon -D
yarn add knex
yarn add pg
yarn add joi
```

### Documentação (ainda incompleta):
- [swagger](https://swagger.io/)
```
yarn add swagger-ui-express
```
## Desafio proposto por:
[André Scherrer](https://www.linkedin.com/in/andrescherrer/)