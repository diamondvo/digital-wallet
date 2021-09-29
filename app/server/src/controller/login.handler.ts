import { CredentialInfo, AccountParams } from 'shared';
import credential from 'src/stubs/credential';

export const loginResolver = (
  source: CredentialInfo,
  params: AccountParams
) => {
  return credential
}