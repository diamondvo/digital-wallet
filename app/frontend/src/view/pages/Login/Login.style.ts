import styled from 'styled-components';
import { Button, Input } from 'antd';
import { StyledContentContainer } from 'src/view/components/Layout/Layout.style';

interface RowProps {
  paddingTop?: number;
}

export const LoginContainer = styled(StyledContentContainer)`
  font-size: ${({ theme }) => theme.font.size.md};
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const RowContent = styled.div<RowProps>`
  text-align: center;
  ${({ paddingTop }) => `${paddingTop && `padding-top: ${paddingTop}px;`}`}
`;

export const ImageStyle = styled.img`
  height: 160px;
`;

export const TitleStyle = styled.h3`
  font-size: ${({ theme }) => theme.font.size.xxlg};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  padding-top: ${({ theme }) => theme.spaces.lg};
  padding-bottom: ${({ theme }) => theme.spaces.sx};
  color: ${({ theme }) => theme.color.black900};
  margin: 0;
`;

export const StyledParagraph = styled.p`
  line-height: 20px;
  color: ${({ theme }) => theme.color.black900};
  margin: 0;
`;

export const InputGroupContainer = styled.div`
  width: 100%;
  padding-top: ${({ theme }) => theme.spaces.lg};
`;

export const LabelStyle = styled.label`
  color: ${({ theme }) => theme.color.black700};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  padding-left: ${({ theme }) => theme.spaces.sx};
  font-size: ${({ theme }) => theme.font.size.xxs};
  text-transform: uppercase;
`;

export const InputPasswordStyle = styled(Input.Password)`
  border: 1px solid ${({ theme }) => theme.border.color.blueE0};
  border-radius:  ${({ theme }) => theme.border.radius.strong};
  height: 40px;
`;

export const ButtonStyle = styled(Button)`
  background: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  border-radius:  ${({ theme }) => theme.border.radius.strong};
  border: none;
  font-size: ${({ theme }) => theme.font.size.sm};
  &:focus, &:blur {
    background: ${({ theme }) => theme.color.primary300};
    color: ${({ theme }) => theme.color.black900};
  }
`;