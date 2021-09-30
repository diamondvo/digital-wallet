import { StyledContentContainer } from "src/view/components/Common/Common.style";
import styled from "styled-components";

export const HomeContainer = styled(StyledContentContainer)`
  padding-top: ${({ theme }) => theme.spaces.md};
`;

export const RowStyle = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const UserInfoStyle = styled(RowStyle)`
    ${RowStyle};
    align-items: center;
    width: 100%;
`;

const BoxParagraphStyle = styled.div`
  ${({ theme }) => {
    return `
    border: 1px solid ${theme.color.secondary};
    border-radius: ${theme.border.radius.strong};
    background: ${theme.color.secondary};
    color: ${theme.color.black900};
    font-size: ${theme.font.size.xs};
    font-weight: bold;
    margin: 0;
    padding: ${theme.spaces.xxs} 19px ${theme.spaces.xxs} 12px;
    `
  }}
`;

export const IconSectionStyle = styled(BoxParagraphStyle)`
  ${({ theme }) => {
    return `
      border: 1px solid ${theme.color.secondary};
      border-radius: ${theme.border.radius.strong};
      background: ${theme.color.secondary};
      color: ${theme.color.black900};
      font-size: ${theme.font.size.xs};
      font-weight: bold;
      margin: 0;
      padding: 0;
  `;  
}}
`;

export const LeftParagraphStyle = styled(BoxParagraphStyle)`
  ${IconSectionStyle};
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => {
    return `
      > div {
        background: ${theme.color.singlePrimary};
        width: 8px;
        height: 8px;
        border-radius: 50%;
        margin-right: 12px;
      }
      > span {
        ${IconSectionStyle};
        padding: ${theme.spaces.xxs} 19px ${theme.spaces.xxs} 12px;
      }
    `;
  }}
`;

export const ImageIcon = styled.img`
  padding: 9px;
`;
