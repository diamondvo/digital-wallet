import React, { useState, useContext } from 'react';
import {
  CardHeader,
  InputGroupContainer,
  LabelStyle,
  BasedInputStyle,
  ImageStyle,
  SpecialLabel,
  ButtonGroup,
  CancelButton,
  SendButton
} from './Sending.style';
import backIcon from 'src/images/back.svg';
import stackIcon from 'src/images/stack.svg';
import eurIcon from 'src/images/eur.png';
import { ParagrahStyle } from 'src/view/components/Asset/Asset.style';
import theme from 'src/config/theme';
import { StyledContentContainer } from 'src/view/components/Layout/Layout.style';
import { RowStyle } from '../Home/Home.style';
import { useHistory } from 'react-router';
import ModalComponent from 'src/view/components/Modal';
import { GlobalContext } from 'src/view/components/GlobalContext/GlobalContext';
import useGetAccountDetails from 'src/utils/hook/useGetAccountDetails';
import useSendAsset from 'src/utils/hook/useSendAsset';
import ConfirmModal from 'src/view/components/ConfirmModal';

const SendingAsset: React.FC = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowConfirmModal , setIsShowConfirmModal] = useState(false);
  const [assetSelected, setAssetSelected] = useState(null);
  const [toAccount, setToAccount] = useState(null);
  const [amount, setAmount] = useState(null);

  const context = useContext(GlobalContext);
  const history = useHistory();
  const { loading: accountDetailLoading, error: accountDetailError, data: accountDetailData } = useGetAccountDetails();
  const { sendAsset, loading: sendAssetLoading, error: sendAssetError, data: sendAssetData } = useSendAsset(
    {
      fromAccountNumber: context.accountNumber,
      toAccountNumber: toAccount,
      assetCurrency: assetSelected?.currency  || 'USD',
      amount: parseFloat(amount)
    }
  );
  if (accountDetailLoading || sendAssetLoading) return <div>...Loading</div>;
  if (accountDetailError || sendAssetError) return <p>An error occurred</p>;

  const handleSendAsset = async () => {
    const assetRes = await sendAsset();
    assetRes?.data?.sendAsset?.currency && setIsShowConfirmModal(true)
  }

  return <form><div className="sending-asset-container">
    <CardHeader>
      <img src={backIcon} alt="Go back" onClick={() => history.goBack()} />
      <ParagrahStyle
        fontSize={14}
        fontWeight={600}
        color={theme.color.black900}
      >Send Assets</ParagrahStyle>
      <div />
    </CardHeader>
    <StyledContentContainer>
      <InputGroupContainer paddingTop={25} paddingBottom={16}>
        <LabelStyle
          color={theme.color.black700}
          fontWeight={700}
          fontSize={10}
          paddingLeft={8}
        >From</LabelStyle>
        <BasedInputStyle value={context.accountNumber} disabled />
      </InputGroupContainer>
      <InputGroupContainer paddingBottom={16}>
        <LabelStyle
          color={theme.color.black700}
          fontWeight={700}
          fontSize={10}
          paddingLeft={8}
        >TO</LabelStyle>
        <BasedInputStyle value={toAccount} onChange={e => setToAccount(e.target.value)} />
      </InputGroupContainer>
      <InputGroupContainer paddingBottom={16}>
        <LabelStyle
          color={theme.color.black700}
          fontWeight={700}
          fontSize={10}
          paddingLeft={8}
        >Asset</LabelStyle>
        <BasedInputStyle
          suffix={<ImageStyle width={18} height={18} src={stackIcon} alt="Choose another asset" />}
          prefix={
            <ImageStyle width={24} height={24} src={eurIcon} alt="Eur" />
          }
          onFocus={(e) => { e.preventDefault(); setIsShowModal(true) }}
          value={assetSelected?.currency}

        />
      </InputGroupContainer>
      <InputGroupContainer paddingBottom={16}>
        <RowStyle>
          <LabelStyle
            color={theme.color.black700}
            fontWeight={700}
            fontSize={10}
            paddingLeft={8}
          >Amount</LabelStyle>
          <LabelStyle
            color={theme.color.black900}
            fontWeight={700}
            fontSize={10}
            paddingLeft={8}
          >Available: {assetSelected?.amount} {assetSelected?.currency}</LabelStyle>
        </RowStyle>
        <BasedInputStyle
          suffix={<SpecialLabel fontSize={10} fontWeight={700} color={theme.color.black700}>Max</SpecialLabel>}
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />
      </InputGroupContainer>
    </StyledContentContainer>
    <StyledContentContainer>
      <ButtonGroup>
        <CancelButton width={160} height={40} onClick={() => history.goBack()}>Cancel</CancelButton>
        <SendButton width={160} height={40} onClick={handleSendAsset}>Send</SendButton>
      </ButtonGroup>
    </StyledContentContainer>
    <ModalComponent
      visible={isShowModal}
      setVisible={isVisible => setIsShowModal(isVisible)}
      assets={accountDetailData.assets}
      onSelect={asset => {
        setIsShowModal(false);
        setAssetSelected(asset);
      }}
    />
    <ConfirmModal
      visible={isShowConfirmModal}
      setVisible={isVisible => {
        setIsShowConfirmModal(isVisible);
        history.goBack()
      }}
      currency={sendAssetData?.currency}
    />
  </div> </form>
}

export default SendingAsset;