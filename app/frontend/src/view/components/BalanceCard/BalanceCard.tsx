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
import { Asset } from 'shared';
import { formatNumber } from 'src/utils/format';

type BalanceType = {
  accountNumber: string;
  accountBalance: Asset;
}

const BalanceCard: React.FC<BalanceType> = ({ accountNumber, accountBalance }) => {
  return <BalanceContainer>
    <RowStyle>
      <div>
        <TitleStyle>My Wallet</TitleStyle>
        <AccountNumberStyle>({accountNumber})</AccountNumberStyle>
      </div>
      <div>
        <img src={copyIcon} alt="Click to copy" />
      </div>
    </RowStyle>
    <BorderSeperateStyle />
    <BalanceSection>
      <div>
        <H2Style>{formatNumber(accountBalance.amount)} {formatNumber(accountBalance.currency)}</H2Style>
        <H3Style>{formatNumber(accountBalance.vndAmount)} VND</H3Style>
      </div>
      <SpecificImg src={subtract} alt=""/>
    </BalanceSection>
  </BalanceContainer>
}

export default BalanceCard;