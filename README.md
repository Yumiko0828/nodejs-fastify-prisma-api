# nodejs-fastify-prisma-api

A To Do application with Nodejs, Fastify and MongoDB with Prisma.

## Table of Content

- [Requirements](#requirements)
- [Configuration](#configuration)
  - [Download](#download-project)
  - [.env variables](#configure-env-variables)
  - [Install Deps](#install-dependencies)
  - [Generate Prisma Client](#generate-a-prisma-client)
  - [Start server](#start-server)
- [Endpoints](#endpoints)

## Requirements:

- [Node.js](https://nodejs.org)
- A MongoDB [(Atlas)](https://www.mongodb.com/es/atlas/database)

## Configuration

### Download project

Clone with Git:

```sh
git clone https://github.com/Yumiko0828/nodejs-fastify-prisma-api.git
```

### Configure .env variables

```env
DATABASE_URL=<Your mongoDB URI>
```

### Install dependencies

```sh
npm install
# yarn i
# pnpm i
```

### Generate a Prisma Client

```sh
npm run prisma:g
# yarn run prisma:g
# pnpm run prisma:g
```

### Start server

Production:

```sh
npm start
```

Development:

```sh
npm run dev
```

## Endpoints

- (**GET**) `/api/tasks`: Get all tasks.
- (**GET**) `/api/task/:id`: Get a task by Id.
- (**POST**) `/api/task`: Create a new task.

  Request body:

  ```json
  {
    "title": "...", // Required
    "content": "...", // Optional
    "author": "..." // Required
  }
  ```

- (**PUT**) `/api/task/:id`: Update a task by Id.

  Request body:

  ```json
  {
    "title": "...",
    "content": "...",
    "done": true // or false
  }
  ```

- (**DELETE**) `/api/task/:id`: Delete a task by Id.
