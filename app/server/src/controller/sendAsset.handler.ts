import { CredentialInfo, AssetParams } from 'shared';

export const sendAssetResolver = (
  source: { currency: string },
  params: { assetParams: AssetParams }
) => {
  return { currency: params.assetParams.assetCurrency };
}