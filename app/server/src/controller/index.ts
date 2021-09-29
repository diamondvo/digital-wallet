import { accountDetailResolver } from "src/controller/accountDetails.handler";
import { loginResolver } from "src/controller/login.handler";
import { sendAssetResolver } from "src/controller/sendAsset.handler";

const resolvers = {
  Query: {
    accountDetails: accountDetailResolver
  },
  Mutation: {
    login: loginResolver,
    sendAsset: sendAssetResolver
  }
}

export default resolvers;