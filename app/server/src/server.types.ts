import { ApolloServer } from 'apollo-server-express';
import express from 'express';

export type ServerType = {
  app: express.Application,
  server: ApolloServer
}