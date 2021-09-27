import React from 'react';
import {
  ImageStyle,
  LoginContainer,
  RowContent,
  TitleStyle,
  StyledParagraph,
  InputGroupContainer,
  LabelStyle,
  InputPasswordStyle,
  ButtonStyle
} from './Login.style';
import roninLogin from 'src/images/ronin-logo.png';

const Login: React.FC = () => {
  return <LoginContainer>
    <RowContent>
      <ImageStyle src={roninLogin} alt="" />
      <TitleStyle tabIndex={-1}>Ronin Wallet</TitleStyle>
      <StyledParagraph>Your Digital Password</StyledParagraph>
    </RowContent>
    <InputGroupContainer>
      <LabelStyle>Enter password</LabelStyle>
      <InputPasswordStyle />
      <RowContent paddingTop={24}>
        <ButtonStyle>Unlock</ButtonStyle>
      </RowContent>
    </InputGroupContainer>
  </LoginContainer>
}

export default Login;