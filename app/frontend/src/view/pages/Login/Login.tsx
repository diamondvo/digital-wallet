import React, { useState } from 'react';
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
import { ACCOUNT_NUMBER } from 'src/constants';
import { Form } from 'antd';
import useLogin from 'src/utils/hook/useLogin';

const Login: React.FC = () => {
  const [password, setPassword] = useState('');
  const { login, loading, error } = useLogin(ACCOUNT_NUMBER, password);

  if (loading) return <div>...Loading</div>;
  if (error) return <p>An error occurred</p>;

  return <LoginContainer>
    <RowContent>
      <ImageStyle src={roninLogin} alt="" />
      <TitleStyle tabIndex={-1}>Ronin Wallet</TitleStyle>
      <StyledParagraph>Your Digital Password</StyledParagraph>
    </RowContent>
    <Form onFinish={login}>
      <Form.Item>
        <InputGroupContainer>
          <LabelStyle>Enter password</LabelStyle>
          <InputPasswordStyle value={password} onChange={e => setPassword(e.target.value)} />
          <RowContent paddingTop={24}>
            <ButtonStyle htmlType="submit">Unlock</ButtonStyle>
          </RowContent>
        </InputGroupContainer>
      </Form.Item>
    </Form>
  </LoginContainer>
}

export default Login;