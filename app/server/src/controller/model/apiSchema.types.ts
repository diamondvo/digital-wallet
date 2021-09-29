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
    assets: [Asset]
  }

  type CredentialResponse {
    token: String
  }

  input AssetParams {
    fromAccountNumber: String
    toAccountNumber: String
    assetCurrency: String
    amount: Float
  }

  type AssetResponse {
    currency: String
  }

  type Query {
    accountDetails: AccountDetailsResponse
  }

  type Mutation {
    login(accountNumber: String!, password: String!): CredentialResponse
    sendAsset(assetParams: AssetParams): AssetResponse
  }
`;

export const graphqlSchema = buildSchema(typeDefs);
export default typeDefs;