import { gql, useQuery } from "@apollo/client";
import { AccountDetailsResponse, AccountParams } from 'shared';

const QUERY_ACCOUNT_DETAILS = gql`
  query {
    accountDetails {
      accountNumber,
      accountName,
      assets {
        currency,
        amount,
        vndAmount,
        default
      }
    }
  }
`;

type GraphQLAccountDetailData = {
  accountDetails: AccountDetailsResponse
}

export const useGetAccountDetails = () => {
  const { loading, data, error } = useQuery<GraphQLAccountDetailData, AccountParams>(QUERY_ACCOUNT_DETAILS);
  return { loading, data: data?.accountDetails, error };
}

export default useGetAccountDetails;