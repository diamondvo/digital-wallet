import React, { useState, useContext } from 'react';
import {
  CardHeader,
  BasedInputStyle,
  SpecialLabel,
  ButtonGroup,
  CancelButton,
  SendButton
} from 'src/view/pages/Sending/Sending.style';
import backIcon from 'src/images/back.svg';
import stackIcon from 'src/images/stack.svg';
import eurIcon from 'src/images/eur.png';
import theme from 'src/config/theme';
import { RowStyle } from 'src/view/pages/Home/Home.style';
import { useHistory } from 'react-router';
import ModalComponent from 'src/view/components/Modal';
import { GlobalContext } from 'src/view/components/GlobalContext/GlobalContext';
import useGetAccountDetails from 'src/utils/hook/useGetAccountDetails';
import useSendAsset from 'src/utils/hook/useSendAsset';
import ConfirmModal from 'src/view/components/ConfirmModal';
import { ImageStyle, InputGroupContainer, LabelStyle, PrimaryParagraph, StyledContentContainer } from 'src/view/components/Common/Common.style';

const SendingAsset: React.FC = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowConfirmModal, setIsShowConfirmModal] = useState(false);
  const [assetSelected, setAssetSelected] = useState(null);
  const [toAccount, setToAccount] = useState(null);
  const [amount, setAmount] = useState(null);

  const [invalidTo, setInvalidTo] = useState(false);
  const [invalidAsset, setInvalidAsset] = useState(false);
  const [invalidAmount, setInvalidAmount] = useState(false);

  const context = useContext(GlobalContext);
  const history = useHistory();
  const { loading: accountDetailLoading, error: accountDetailError, data: accountDetailData } = useGetAccountDetails();
  const { sendAsset, loading: sendAssetLoading, error: sendAssetError, data: sendAssetData } = useSendAsset(
    {
      fromAccountNumber: context.accountNumber,
      toAccountNumber: toAccount,
      assetCurrency: assetSelected?.currency,
      amount: parseFloat(amount)
    }
  );
  if (accountDetailLoading || sendAssetLoading) return <div>...Loading</div>;
  if (accountDetailError || sendAssetError) return <p>An error occurred</p>;

  const handleSendAsset = async () => {
    if (amount && toAccount && assetSelected) {
      const assetRes = await sendAsset();
      assetRes?.data?.sendAsset?.currency && setIsShowConfirmModal(true)
    } else {
      !assetSelected && setInvalidAsset(true);
      !amount && setInvalidAmount(true);
      !toAccount &&  setInvalidTo(true);
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
    if (type === 'to') {
      setInvalidTo(false);
      setToAccount(e.target.value);
    } else {
      setInvalidAmount(false);
      setAmount(e.target.value);
    }
  }

  return <form><div className="sending-asset-container">
    <CardHeader>
      <img src={backIcon} alt="Go back" onClick={() => history.goBack()} />
      <PrimaryParagraph
        fontSize={14}
        fontWeight={600}
        color={theme.color.black900}
      >Send Assets
      </PrimaryParagraph>
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
        <BasedInputStyle value={toAccount} onChange={e => handleInputChange(e, 'to')} />
        {invalidTo && <PrimaryParagraph fontSize={12} color='#f55d5d'>Invalid To</PrimaryParagraph>}
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
        {invalidAsset && <PrimaryParagraph fontSize={12} color='#f55d5d'>Please choose a currency</PrimaryParagraph>}
      </InputGroupContainer>
      <InputGroupContainer paddingBottom={16}>
        <RowStyle>
          <LabelStyle
            color={theme.color.black700}
            fontWeight={700}
            fontSize={10}
            paddingLeft={8}
          >Amount</LabelStyle>
          {assetSelected && <LabelStyle
            color={theme.color.black900}
            fontWeight={700}
            fontSize={10}
            paddingLeft={8}
          >Available: {assetSelected?.amount} {assetSelected?.currency}</LabelStyle>}
        </RowStyle>
        <BasedInputStyle
          suffix={<SpecialLabel fontSize={10} fontWeight={700} color={theme.color.black700}>Max</SpecialLabel>}
          value={amount}
          onChange={e => handleInputChange(e, 'amount')}
        />
        {invalidAmount && <PrimaryParagraph fontSize={12} color='#f55d5d'>Invalid amount</PrimaryParagraph>}
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
        setInvalidAsset(false);
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