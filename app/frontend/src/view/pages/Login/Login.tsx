import React, { useState } from 'react';
import {
  ImageStyle,
  LoginContainer,
  RowContent,
  TitleStyle,
  StyledParagraph,
  InputGroupContainer,
  InputPasswordStyle,
  ButtonStyle
} from 'src/view/pages/Login/Login.style';
import roninLogin from 'src/images/ronin-logo.png';
import { ACCOUNT_NUMBER } from 'src/constants';
import { Form } from 'antd';
import useLogin from 'src/utils/hook/useLogin';
import { useHistory } from 'react-router';
import { PAGE_ID } from 'src/config/pageConfig';
import { LabelStyle, PrimaryParagraph } from 'src/view/components/Common/Common.style';
import theme from 'src/config/theme';

const Login: React.FC = () => {
  const history = useHistory();

  const [password, setPassword] = useState(null);
  const [invalidPassword, setInvalidPassword] = useState(false);
  const { login, loading, error } = useLogin(ACCOUNT_NUMBER, password);

  if (loading) return <div>...Loading</div>;
  if (error) return <p>An error occurred</p>;

  const handleUnlock = async () => {
    if (password) {
      const loginRes = await login();
      loginRes?.data.login.token && history.push(PAGE_ID.HOME_PAGE);
    } else {
      setInvalidPassword(true);
    }
  }

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInvalidPassword(false);
    setPassword(e.target.value);
  }

  return <LoginContainer>
    <RowContent>
      <ImageStyle src={roninLogin} alt="" />
      <TitleStyle tabIndex={-1}>Ronin Wallet</TitleStyle>
      <StyledParagraph>Your Digital Password</StyledParagraph>
    </RowContent>
    <Form onFinish={handleUnlock}>
      <Form.Item>
        <InputGroupContainer>
          <LabelStyle
            color={theme.color.black700}
            fontWeight={700}
            fontSize={10}
            paddingLeft={8}
          >Enter password
          </LabelStyle>
          <InputPasswordStyle value={password} onChange={onPasswordChange} />
          {invalidPassword && <PrimaryParagraph fontSize={12} color='#f55d5d'>Password is required</PrimaryParagraph>}
        </InputGroupContainer>
        <RowContent paddingTop={24}>
          <ButtonStyle htmlType="submit">Unlock</ButtonStyle>
        </RowContent>
      </Form.Item>
    </Form>
  </LoginContainer>
}

export default Login;