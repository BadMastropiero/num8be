# Number8 Backend CE

## Description

Using [Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.
With [prisma](https://www.prisma.io/) as ORM.
And [graphql](https://graphql.org/) as API.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Prisma

To generate migrations:

```bash
$ npm run prisma:migrations:gen <migration_name>
```

To sync prisma scheme with db:

```bash
$ npm run prisma:push
```

## Database
For simplicity, we are using sqlite as database, but you can change it to any other database supported by prisma.

## Api security

For simplicity, we are using a simple api key for security, but you can change it to any other security method.