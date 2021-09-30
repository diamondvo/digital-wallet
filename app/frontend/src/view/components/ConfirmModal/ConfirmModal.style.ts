import { Modal } from "antd";
import styled from "styled-components";
import { PrimaryButton } from "src/view/components/Common/Common.style";

type BasicHeadingOptions = {
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
  textAlign?: string;
  fontSize?: number;
  fontWeight?: string;
}

export const ModalContainer = styled(Modal)`
  ${({ theme }) => {
    return `
      max-width: calc(100% - 40px);
      margin: 0;
      padding-top: ${theme.spaces.md};
      padding-bottom: ${theme.spaces.md};
      
      .ant-modal-body {
        border-radius: ${theme.border.radius.exStrong};
        border-top-right-radius: ${theme.border.radius.exStrong};
        border-top-left-radius: ${theme.border.radius.exStrong};
        padding: 0;

        > button {
          margin: ${theme.spaces.lg} 0 0 0;
        }
      }
      .ant-modal-header {
        border-top-right-radius: ${theme.border.radius.exStrong};
        border-top-left-radius: ${theme.border.radius.exStrong};
        border-bottom: 1px solid ${theme.border.color.blueE0};
        > div {
          text-align: center;
          color: ${theme.color.black900};
          font-size: ${theme.font.size.sm};
          font-weight: ${theme.font.weight.semibold};
        }
        
      }
      .ant-modal-content {
        height: 100%;
        width: 100%;
        margin: 0;
        top: 0;
        border-radius: ${theme.border.radius.exStrong};
        padding: ${theme.spaces.lg} ${theme.spaces.md} 22px ${theme.spaces.md};
      }
    `
  }}
`;

export const CommonHeading3 = styled.h3<BasicHeadingOptions>`
  ${({ paddingTop, paddingBottom, paddingLeft, paddingRight, textAlign, fontSize, fontWeight }) => {
    return `
      margin: 0;
      ${paddingBottom && `padding-bottom: ${paddingBottom}px;`};
      ${paddingTop && `padding-top: ${paddingBottom}px;`};
      ${paddingLeft && `padding-left: ${paddingLeft}px;`};
      ${paddingRight && `padding-right: ${paddingRight}px;`};
      ${fontSize && `font-size: ${fontSize}px;`};
      ${fontWeight && `font-weight: ${fontWeight};`};
      ${textAlign && `text-align: ${textAlign};`};
  `}};
`;

export const OkButton = styled(PrimaryButton)`
  background: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
`;