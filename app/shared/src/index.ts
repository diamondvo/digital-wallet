export const GRAPHQL_PATH = '/digital-wallet/graph';

export type Assets = {
  currency: string;
  amount: number;
  vndAmount: number;
  default: boolean;
}

export type AccountDetailsResponse = {
  accountNumber: string;
  accountName: string;
  token: string;
  assets: Assets[];
}

export type AccountParams = {
  accountNumber: string;
  password: string;
}