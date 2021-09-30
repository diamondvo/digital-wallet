import { Button } from "antd";
import styled from "styled-components";
import { BasicOptions, DimensionOptions } from "src/view/components/Common/Common.types";

export const InputGroupContainer = styled.div<BasicOptions>`
  ${({ paddingBottom, paddingTop }) => {
    return `
      width: 100%;
      ${paddingBottom && `padding-bottom: ${paddingBottom}px;`};
      ${paddingTop && `padding-top: ${paddingTop}px;`};
  `}};
`;

export const ImageStyle = styled.img<DimensionOptions>`
    ${({ width, height }) => {
    return `
        width: ${width}px;
        height: ${height}px;
      `;
  }}
`;

export const PrimaryButton = styled(Button) <DimensionOptions>`
  ${({ theme, width, height }) => {
    return `
      width: ${width ? `${width}px` : '100%'};
      height: ${height ? `${height}px` : '100%'};
      font-size: ${theme.font.size.sm};
      font-weight: ${theme.font.weight.semibold};
      border: none;
      border-radius: ${theme.border.radius.strong};
    `;
  }}
`;

export const PrimaryParagraph = styled.p<BasicOptions>`
${({ fontSize, fontWeight, color, paddingBottom, paddingTop, paddingLeft, paddingRight }) => {
    return `
    font-size: ${fontSize}px;
    font-weight: ${fontWeight};
    color: ${color};
    margin: 0;
    ${paddingBottom && `pading-bottom: ${paddingBottom}px;`}
    ${paddingTop && `pading-top: ${paddingTop}px;`}
    ${paddingLeft && `pading-left: ${paddingLeft}px;`}
    ${paddingRight && `pading-right: ${paddingRight}px;`}
  `;
  }}
`;

export const StyledContentContainer = styled.div`
  padding-left: ${({ theme }) => theme.spaces.md};
  padding-right: ${({ theme }) => theme.spaces.md};
`;