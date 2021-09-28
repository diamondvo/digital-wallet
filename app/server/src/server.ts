import { ServerType } from 'src/server.types';
import express from 'express';
import { ApolloServer, Config } from 'apollo-server-express';
import { environment } from './config/environment';
import typeDefs from 'src/controller/model/apiSchema.types';
import resolvers from 'src/controller';
import { GRAPHQL_PATH } from 'shared';

async function startServer(): Promise<ServerType> {
  const app = express();
  const apolloConf: Config = {
    typeDefs,
    resolvers
  }

  const server = new ApolloServer(apolloConf);
  app.get('/health', (_req, res) => res.send('UP'));

  (environment.IS_DEVELOPMENT_MODE) && (app.use('/@apollographql/graphql-playground-react@local',
    express.static('../frontend/public/graphql-playground-react')
  ));

  await server.start();
  server.applyMiddleware({ app, path: GRAPHQL_PATH })
  return {
    app,
    server
  }
}

export { startServer };