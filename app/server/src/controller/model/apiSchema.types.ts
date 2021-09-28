import { buildSchema } from 'graphql';

const typeDefs = `
  type Asset {
    currency: String
    amount: Float
    vndAmount: Float
    default: Boolean
  }

  type AccountDetailsResponse {
    accountNumber: String
    accountName: String
    token: String
    assets: [Asset]
  }

  type Query {
    accountDetails(accountNumber: String!, password: String!): AccountDetailsResponse
  }
`;

export const graphqlSchema = buildSchema(typeDefs);
export default typeDefs;