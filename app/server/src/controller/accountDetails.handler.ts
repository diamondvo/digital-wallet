import { AccountDetailsResponse, AccountParams } from 'shared';
import { accountInfo } from 'src/stubs/account-info';

export const accountDetailResolver = (
  source: AccountDetailsResponse,
  params: AccountParams
) => {
  return accountInfo;
}