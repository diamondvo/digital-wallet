import React from 'react';
import { AssetContainer, AssetTitle, AssetContent, AssetRow, ParagrahStyle } from './Asset.style';
import eurImg from 'src/images/eur.png';
import yenImg from 'src/images/yen.png';
import theme from 'src/config/theme';

const Asset: React.FC = () => {
  return <AssetContainer>
    <AssetTitle>Assets</AssetTitle>
    <AssetContent>
      <AssetRow>
        <img src={eurImg} alt="eur" />
        <div className="balance-info">
          <ParagrahStyle 
            fontSize={14}
            fontWeight={600}
            paddingBottom={4}
            color={theme.color.black900}>
              50 EUR
          </ParagrahStyle>
          <ParagrahStyle
            fontSize={12}
            fontWeight={400}
            color={theme.color.grey600}>1,531,971 VND</ParagrahStyle>
        </div>
      </AssetRow>

      <AssetRow isLastRow>
        <img src={yenImg} alt="yen" />
        <div className="balance-info">
          <ParagrahStyle 
            fontSize={14}
            fontWeight={600}
            paddingBottom={4}
            color={theme.color.black900}>
              50 EUR
          </ParagrahStyle>
          <ParagrahStyle
            fontSize={12}
            fontWeight={400}
            color={theme.color.grey600}>1,531,971 VND</ParagrahStyle>
        </div>
      </AssetRow>
    </AssetContent>
  </AssetContainer>
}

export default Asset;