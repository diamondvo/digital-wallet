import styled from "styled-components";

interface AssetRow {
  isLastRow?: boolean;
  isControl?: boolean;
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
  ${({ theme, isLastRow, isControl }) => {
    return `
      background: ${isControl ? theme.color.secondary : theme.color.white};
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

      ${!isControl && `
      &:hover {
        background: ${theme.color.secondary};
        cursor: pointer;
      }
    `}
    `;
  }}
`