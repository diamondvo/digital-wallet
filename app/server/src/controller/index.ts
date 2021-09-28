import { accountDetailResolver } from "src/controller/accountDetails.handler";

const resolvers = {
  Query: {
    accountDetails: accountDetailResolver
  }
}

export default resolvers;