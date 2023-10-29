# Multilist

This is a pet project of Naja Snake and akkonrad.

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

To create new library for api, run the command below:

Api swagger documentation is available under url: [localhost:3000/docs](http://localhost:3000/docs)
```
nx g @nx/nest:library --name=<lib-name> --directory=libs/api/<lib-directory> --importPath=@api/<lib-name> --projectNameAndRootFormat=as-provided --no-interactive
```

### Web
TODO: provide description
