import { Input } from "antd";
import { LabelStyle, PrimaryButton } from "src/view/components/Common/Common.style";
import styled from "styled-components";

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  box-shadow: 0px 4px 12px ${({ theme }) => theme.color.secondary};
  padding-left: 32px;
  padding-right: 32px;
`;



export const BasedInputStyle = styled(Input)`
  border: 1px solid ${({ theme }) => theme.border.color.blueE0};
  border-radius:  ${({ theme }) => theme.border.radius.strong};
  height: 40px;
`;

export const SpecialLabel = styled(LabelStyle)`
    padding: 2px 8px;
    border-radius: ${({ theme }) => theme.border.radius.strong};
    background: ${({ theme }) => theme.color.blue200};
`;

export const ButtonGroup = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    padding-bottom: 20px;
`;

export const CancelButton = styled(PrimaryButton)`
  background: ${({ theme }) => theme.color.secondary};
  color: ${({ theme }) => theme.color.singlePrimary};
  margin-right: 8px;
`;

export const SendButton = styled(PrimaryButton)`
  background: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  margin-left: 8px;
`;