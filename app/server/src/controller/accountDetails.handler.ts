import { AccountDetailsResponse } from 'shared';
import { accountInfo } from 'src/stubs/account-info';

export const accountDetailResolver = (
  source: AccountDetailsResponse,
) => {
  return accountInfo;
}