import React from 'react';
import {
  HomeContainer,
  LeftParagraphStyle,
  IconSectionStyle,
  RowStyle,
  UserInfoStyle,
  ImageIcon
} from './Home.style';
import userIcon from 'src/images/user.svg';
import BalanceCard from 'src/view/components/BalanceCard';
import TransactionType from 'src/view/components/TransactionType';
import Asset from 'src/view/components/Asset';

const Home: React.FC = () => {
  return <HomeContainer>
    <RowStyle>
      <UserInfoStyle>
        <LeftParagraphStyle>
          <div />
          Ronin Wallet</LeftParagraphStyle>
        <IconSectionStyle>
          <ImageIcon src={userIcon} alt="" />
        </IconSectionStyle>
      </UserInfoStyle>
    </RowStyle>
    <BalanceCard />
    <TransactionType />
    <Asset />
  </HomeContainer>
}

export default Home;