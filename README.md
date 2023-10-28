# Multilist

This is a pet project of Naja Snake 🐍 and akkonrad.

To get general help on nx, you can use https://nx.dev/ai-chat

---

## How to start the app on local machine

Before you start local development few steps needs to be done. At this point you need to have a mongo database running locally/in docker/in cloud.

### Database

To create a database connection you need to:

- copy .env.example into .env and provide your database connection string
- run `nx run prisma-scheme:generate-types` to generate types for prisma client

Since we are using mondo database, the migrate step is not necessary since the mongo is not strongly typed.
If the model (`libs/prisma-schema/prisma/schema.prisma`) is changed, we need to run the command again:

```
nx run prisma-scheme:generate-types
```

### Api

To start the development server run `nx serve api`. Open your browser and navigate to http://localhost:3000/. Happy coding!

### Web

TODO: provide description
