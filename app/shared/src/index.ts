export const GRAPHQL_PATH = '/digital-wallet/graph';

export type Asset = {
  currency: string;
  amount: number;
  vndAmount: number;
  default: boolean;
}

export type AccountDetailsResponse = {
  accountNumber: string;
  accountName: string;
  assets: Asset[];
}

export type AccountParams = {
  accountNumber: string;
  password: string;
}

export type CredentialInfo = {
  token: string;
}

export type AssetParams = {
  fromAccountNumber: string;
  toAccountNumber: string;
  assetCurrency: string;
  amount: number;
}