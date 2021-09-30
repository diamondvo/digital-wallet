import React, { useContext } from 'react';
import {
  HomeContainer,
  LeftParagraphStyle,
  IconSectionStyle,
  RowStyle,
  UserInfoStyle,
  ImageIcon
} from 'src/view/pages/Home/Home.style';
import userIcon from 'src/images/user.svg';
import BalanceCard from 'src/view/components/BalanceCard';
import TransactionType from 'src/view/components/TransactionType';
import Asset from 'src/view/components/Asset';
import useGetAccountDetails from 'src/utils/hook/useGetAccountDetails';
import { useHistory } from 'react-router';
import { GlobalContext } from 'src/view/components/GlobalContext/GlobalContext';
export interface HomeStateType {
  accountNumber: string;
}

const Home: React.FC = props => {
  const context = useContext(GlobalContext);
  const history = useHistory();
  const { loading, error, data } = useGetAccountDetails();
  if (loading) return <div>...Loading</div>;
  if (error) return <p>An error occurred</p>;
  const defaultAsset = data.assets.find(asset => asset.default);
  const otherAssets = data.assets.filter(asset => asset.currency !== defaultAsset.currency);

  return <HomeContainer>
    <RowStyle>
      <UserInfoStyle>
        <LeftParagraphStyle>
          <div />
          {data.accountName} Wallet</LeftParagraphStyle>
        <IconSectionStyle>
          <ImageIcon src={userIcon} alt="" />
        </IconSectionStyle>
      </UserInfoStyle>
    </RowStyle>
    <BalanceCard accountNumber={context.accountNumber} accountBalance={defaultAsset} />
    <TransactionType dispatchAction={actionType => history.push({ pathname: actionType })} />
    <Asset assets={otherAssets} />
  </HomeContainer>
}

export default Home;