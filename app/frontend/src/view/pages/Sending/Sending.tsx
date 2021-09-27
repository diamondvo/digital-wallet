import React from 'react';
import { CardHeader, 
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

const SendingAsset: React.FC = () => {
  return  <form><div className="sending-asset-container">
    <CardHeader>
      <img src={backIcon} alt="Go back" />
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
          <BasedInputStyle />
        </InputGroupContainer>
        <InputGroupContainer paddingBottom={16}>
          <LabelStyle
            color={theme.color.black700}
            fontWeight={700}
            fontSize={10}
            paddingLeft={8}
          >TO</LabelStyle>
          <BasedInputStyle />
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
          />
        </InputGroupContainer>
        <InputGroupContainer paddingBottom={16}>
          <RowStyle>
            <LabelStyle
              color={theme.color.black700}
              fontWeight={700}
              fontSize={10}
              paddingLeft={8}
            >Asset</LabelStyle>
            <LabelStyle
              color={theme.color.black900}
              fontWeight={700}
              fontSize={10}
              paddingLeft={8}
            >Available: 50 EUR</LabelStyle>
          </RowStyle>
          <BasedInputStyle
            suffix={<SpecialLabel fontSize={10} fontWeight={700} color={theme.color.black700}>Max</SpecialLabel>}
          />
        </InputGroupContainer>
    </StyledContentContainer>
    <StyledContentContainer>
      <ButtonGroup>
          <CancelButton width={160} height={40}>Cancel</CancelButton>
          <SendButton width={160} height={40}>Send</SendButton>
        </ButtonGroup>
    </StyledContentContainer>
  </div> </form>
}

export default SendingAsset;