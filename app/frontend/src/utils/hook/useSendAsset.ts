import { gql, useMutation } from "@apollo/client";
import { AssetParams } from "shared";

export const MUTATION_SEND_ASSET = gql`
  mutation SEND_ASSET($assetParams: AssetParams) {
    sendAsset(assetParams: $assetParams) {
      currency
    }
  }
`;

export const useSendAsset = (assetParams: AssetParams) => {
  const [sendAsset, { loading, data, error }] = useMutation<{ sendAsset: { currency: string } }, { assetParams: AssetParams}>(MUTATION_SEND_ASSET, {
    variables: { assetParams: assetParams }
  });
  const currency = data?.sendAsset;
  return { sendAsset, loading, data: currency, error };
}

export default useSendAsset;