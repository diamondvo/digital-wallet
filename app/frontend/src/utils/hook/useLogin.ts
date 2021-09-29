import { gql, useMutation } from "@apollo/client";
import { AccountParams } from "shared";
import { STORAGE_VALUES } from "src/constants";

export const MUTATION_LOGIN = gql`
  mutation LOGIN($accountNumber: String!, $password: String!) {
    login(accountNumber: $accountNumber, password: $password) {
      token
    }
  }
`;

export const useLogin = (accountNumber: string, password: string) => {
  const [login, { loading, data, error }] = useMutation<{ login: { token: string } }, AccountParams>(MUTATION_LOGIN, {
    variables: { accountNumber, password },
    onCompleted({ login }) {
      if (login) {
        sessionStorage.setItem(STORAGE_VALUES.TOKEN, login.token as string);
      }
    },
    
  });
  const credential = data?.login;
  return { login, loading, data: credential, error };
}

export default useLogin;