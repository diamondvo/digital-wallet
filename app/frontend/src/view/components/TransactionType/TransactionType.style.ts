import styled from "styled-components";

interface MiddleCard {
  middle?: boolean;
}

export const TransactionTypeContainer = styled.div`
  ${({ theme }) => {
    return `
      padding-top: ${theme.spaces.xlg};
      padding-bottom: 17px;
    `;
  }}
`;

export const ActionTypeStyle = styled.div`
  display: flex;
  justify-content: center;
`;

export const IconCard = styled.div<MiddleCard>`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  ${({ middle }) => middle && `
    margin-left: 24px;
    margin-right: 24px;
  `}
`;

export const IconContent = styled(ActionTypeStyle)`
  ${({ theme }) => {
    return `
      background: ${theme.color.secondary};
      border-radius: ${theme.border.radius.strong};
      width: 48px;
      height: 48px;
      align-items: center;
    `;
  }}
`;

export const ImageIcon = styled.img`
  width: 27px;
  height: 27px;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`;

export const ActionLabel = styled.label`
  ${({ theme }) => {
    return `
      color: ${theme.color.black900};
      font-size: ${theme.font.size.xs};
      font-weight: ${theme.font.weight.semibold};
    `
  }}
`;