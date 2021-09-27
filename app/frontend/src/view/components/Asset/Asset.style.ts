import styled from "styled-components";

interface AssetRow {
  isLastRow?: boolean;
}

export interface BasedOptions {
  fontSize?: number;
  fontWeight?: number;
  color?: string;
  paddingBottom?: number;
  paddingTop?: number;
  paddingLeft?: number;
  paddingRight?: number;
}

export const AssetContainer = styled.div`
`;

export const AssetTitle = styled.h3`
  ${({ theme }) => {
    return `
      color: ${theme.color.black900};
      font-size: ${theme.font.size.md};
      font-weight: bold;
      padding-left: 12px;
    `;
  }}
`;

export const AssetContent = styled.h3`
  ${({ theme }) => {
    return `
      
    `;
  }}
`;

export const AssetRow = styled.div<AssetRow>`
  ${({ theme, isLastRow }) => {
    return `
      background: ${theme.color.secondary};
      border-radius: ${theme.border.radius.strong};
      display: flex;
      align-items: center;
      padding-top: 12px;
      padding-bottom: 12px;

      img {
        width: 32px;
        height: 32px;
        margin-left: ${theme.spaces.md};
        margin-right: ${theme.spaces.sm};
      }

      ${!isLastRow && `margin-bottom: ${theme.spaces.sx};`}
    `;
  }}
`

// TODO: Move to the common component folder
export const ParagrahStyle = styled.p<BasedOptions>`
  ${({ fontSize, fontWeight, color, paddingBottom, paddingTop, paddingLeft, paddingRight }) => {
    return `
      font-size: ${fontSize}px;
      font-weight: ${fontWeight};
      color: ${color};
      margin: 0;
      ${paddingBottom && `pading-bottom: ${paddingBottom}px;` }
      ${paddingTop && `pading-top: ${paddingTop}px;`}
      ${paddingLeft && `pading-left: ${paddingLeft}px;`}
      ${paddingRight && `pading-right: ${paddingRight}px;`}
    `;
  }}
`;