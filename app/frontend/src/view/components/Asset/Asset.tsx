import React from 'react';
import { AssetContainer, AssetTitle, AssetContent, AssetRow, ParagrahStyle } from './Asset.style';
import eurImg from 'src/images/eur.png';
import yenImg from 'src/images/yen.png';
import usdImg from 'src/images/usd.png';
import theme from 'src/config/theme';
import { Asset } from 'shared';
import { formatNumber } from 'src/utils/format';
import { CURRENCIES } from 'src/constants';

const AssetRecord: React.FC<{ asset: Asset }> = ({ asset }) => {
  const getCurrencyImg = (currency: string) => {
    switch (currency) {
      case CURRENCIES.EUR:
        return <img src={eurImg} alt={currency} />
      case CURRENCIES.YEN:
        return <img src={yenImg} alt={currency} />
      default:
        return <img src={usdImg} alt={currency} />
    }
  }
  return <React.Fragment>
    {getCurrencyImg(asset.currency)}
    <div className="balance-info" >
      <ParagrahStyle
        fontSize={14}
        fontWeight={600}
        paddingBottom={4}
        color={theme.color.black900}>
        {formatNumber(asset.amount)} {asset.currency}
      </ParagrahStyle>
      <ParagrahStyle
        fontSize={12}
        fontWeight={400}
        color={theme.color.grey600}>{formatNumber(asset.vndAmount)} VND</ParagrahStyle>
    </div >
  </React.Fragment>
}

export const MainAsset: React.FC<{ assets: Array<Asset>, isControl?: boolean, onSelect?: (asset: Asset) => void }> = ({ assets, isControl = true, onSelect }) => {
  return <AssetContent>
    {assets.map((asset, idx) => {
      return isControl ? <AssetRow key={`${asset.currency}_${idx}`} isControl={isControl}>
        <AssetRecord asset={asset} />
      </AssetRow>
        : <AssetRow key={`${asset.currency}_${idx}`} isControl={isControl} onClick={() => onSelect(asset)}>
          <AssetRecord asset={asset} />
        </AssetRow>
    })}
  </AssetContent>
}

export const AssetComponent: React.FC<{ assets: Array<Asset> }> = ({ assets }) => {
  return <AssetContainer>
    <AssetTitle>Assets</AssetTitle>
    <MainAsset assets={assets} />
  </AssetContainer>
}

export default AssetComponent;