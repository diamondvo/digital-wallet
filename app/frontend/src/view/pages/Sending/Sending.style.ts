import { Button, Input } from "antd";
import { BasedOptions } from "src/view/components/Asset/Asset.style";
import styled from "styled-components";

interface BasicOptions {
  width?: number;
  height?: number;
}

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  box-shadow: 0px 4px 12px ${({ theme }) => theme.color.secondary};
  padding-left: 32px;
  padding-right: 32px;
`;

// TODO: Move to the common components
export const InputGroupContainer = styled.div<BasedOptions>`
  ${({ paddingBottom, paddingTop }) => {
    return `
      width: 100%;
      ${paddingBottom && `padding-bottom: ${paddingBottom}px;`};
      ${paddingTop && `padding-top: ${paddingTop}px;`};
  `}};
`;

export const LabelStyle = styled.label<BasedOptions>`
  ${({ fontSize, fontWeight, color, paddingBottom, paddingTop, paddingLeft, paddingRight }) => {
    return `
      font-size: ${fontSize}px;
      font-weight: ${fontWeight};
      color: ${color};
      ${paddingBottom && `pading-bottom: ${paddingBottom}px;` }
      ${paddingTop && `pading-top: ${paddingTop}px;`}
      ${paddingLeft && `pading-left: ${paddingLeft}px;`}
      ${paddingRight && `pading-right: ${paddingRight}px;`};
      text-transform: uppercase;
    `;
  }}
`;

export const BasedInputStyle = styled(Input)`
  border: 1px solid ${({ theme }) => theme.border.color.blueE0};
  border-radius:  ${({ theme }) => theme.border.radius.strong};
  height: 40px;
`;

// TODO: need to move the common style
export const ImageStyle = styled.img<BasicOptions>`
    ${({ width, height }) => {
      return `
        width: ${width}px;
        height: ${height}px;
      `;
    }}
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

const BasicButton = styled(Button)<BasicOptions>`
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

export const CancelButton = styled(BasicButton)`
  background: ${({ theme }) => theme.color.secondary};
  color: ${({ theme }) => theme.color.singlePrimary};
  margin-right: 8px;
`;

export const SendButton = styled(BasicButton)`
  background: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  margin-left: 8px;
`;