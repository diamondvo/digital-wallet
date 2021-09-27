import { RowStyle } from "src/view/pages/Home/Home.style";
import styled from "styled-components";

export const BalanceContainer = styled.div`
  ${({ theme }) => {
    return `
      background: ${theme.color.primary};
      border-radius: ${theme.border.radius.exStrong};
      margin-top: ${theme.spaces.md};
      padding: 18px ${theme.spaces.md} ${theme.spaces.md};
      box-shadow: 0px 12px 20px -4px #C5CEE0;
    `;
  }}
`;

export const TitleStyle = styled.span`
  ${({ theme }) => {
    return `
      color: ${theme.color.white};
      font-size: ${theme.font.size.sm};
      padding-right: ${theme.spaces.sx};
    `;
  }}
`;

export const AccountNumberStyle = styled.span`
  ${({ theme }) => {
    return `
      color: ${theme.color.primary300};
      font-size: ${theme.font.size.sm};
    `;
  }}
`;

export const BorderSeperateStyle = styled.div`
  ${({ theme }) => {
    return `
      opacity: 0.5;
      border: 1px solid ${theme.color.grey400};
      margin-top: ${theme.spaces.semiSx};
    `;
  }}
`;

export const BalanceSection = styled(RowStyle)`
  align-items: flex-end;
  padding-top: 12px;
`;

export const H2Style = styled.h2`
  ${({ theme }) => {
    return `
      color: ${theme.color.white};
      font-size: ${theme.font.size.xxlg};
      font-weight: bold;
      line-height: 40px;
      margin: 0;
    `;
  }}
`;

export const H3Style = styled.h3`
  ${({ theme }) => {
    return `
      color: ${theme.color.primary300};
      font-size: ${theme.font.size.md};
      font-weight: bold;
      line-height: 40px;
      margin: 0;
    `;
  }}
`;

export const SpecificImg = styled.img`
  height: 40px;
`;