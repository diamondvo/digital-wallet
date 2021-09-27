import React from 'react';
import { RowStyle } from 'src/view/pages/Home/Home.style';
import {
  BalanceContainer,
  TitleStyle,
  AccountNumberStyle,
  BorderSeperateStyle,
  BalanceSection,
  H2Style,
  H3Style,
  SpecificImg
} from './BalanceCard.style';
import copyIcon from 'src/images/copy.svg';
import subtract from 'src/images/subtract.png';

const BalanceCard: React.FC = () => {
  return <BalanceContainer>
    <RowStyle>
      <div>
        <TitleStyle>My Wallet</TitleStyle>
        <AccountNumberStyle>(7300 3777 3888 3334)</AccountNumberStyle>
      </div>
      <div>
        <img src={copyIcon} alt="Click to copy" />
      </div>
    </RowStyle>
    <BorderSeperateStyle />
    <BalanceSection>
      <div>
        <H2Style>1,000 USD</H2Style>
        <H3Style>23,046,000 USD</H3Style>
      </div>
      <SpecificImg src={subtract} alt=""/>
    </BalanceSection>
  </BalanceContainer>
}

export default BalanceCard;